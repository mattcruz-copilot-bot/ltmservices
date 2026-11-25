/**
 * Shared, dependency-free rules for the website enquiry flow.
 *
 * Imported by the contact-enquiry edge function (Deno) and by the vitest suite
 * (browser), so this file must stay free of `npm:` specifiers and runtime
 * configuration.
 */

/** Where every enquiry notification is delivered. */
export const OWNER_EMAIL = 'info@ltm-ukservices.co.uk'

/** Field length caps applied before anything is stored or emailed. */
export const LIMITS = {
  name: 200,
  email: 255,
  phone: 50,
  company: 200,
  service: 200,
  message: 5000,
} as const

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export type EnquiryRejection =
  | 'name_required'
  | 'email_invalid'
  | 'message_required'
  | 'submission_id_invalid'

export interface CleanEnquiry {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
  submissionId: string
}

export type EnquiryResult =
  | { ok: true; enquiry: CleanEnquiry }
  | { ok: false; reason: EnquiryRejection }

function text(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

/**
 * Trims and caps every field, then rejects the submission if anything the
 * owner needs to reply is missing or malformed.
 */
export function cleanEnquiry(body: unknown): EnquiryResult {
  const source = (body && typeof body === 'object' ? body : {}) as Record<
    string,
    unknown
  >

  const enquiry: CleanEnquiry = {
    name: text(source.from_name, LIMITS.name),
    email: text(source.reply_to, LIMITS.email),
    phone: text(source.phone, LIMITS.phone),
    company: text(source.company, LIMITS.company),
    service: text(source.service, LIMITS.service),
    message: text(source.message, LIMITS.message),
    submissionId: text(source.submission_id, 64),
  }

  if (!enquiry.name) return { ok: false, reason: 'name_required' }
  if (!EMAIL_RE.test(enquiry.email)) return { ok: false, reason: 'email_invalid' }
  if (!enquiry.message) return { ok: false, reason: 'message_required' }
  if (!UUID_RE.test(enquiry.submissionId)) {
    return { ok: false, reason: 'submission_id_invalid' }
  }

  return { ok: true, enquiry }
}

/**
 * Fixed-window throttle. `now` is injectable so the window can be tested
 * without waiting for real time to pass.
 */
export class RateLimiter {
  private hits = new Map<string, { count: number; resetAt: number }>()

  constructor(
    private maxPerWindow: number,
    private windowMs: number,
    private now: () => number = Date.now,
  ) {}

  /** Returns true when this key has just gone over its allowance. */
  hit(key: string): boolean {
    const t = this.now()
    const entry = this.hits.get(key)

    if (!entry || entry.resetAt <= t) {
      this.hits.set(key, { count: 1, resetAt: t + this.windowMs })
      return false
    }

    entry.count += 1
    return entry.count > this.maxPerWindow
  }
}
