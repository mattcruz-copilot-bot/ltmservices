import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'
import { cleanEnquiry, RateLimiter, OWNER_EMAIL } from '../_shared/enquiry-validation.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
}

// Per-instance, best-effort throttle. The enquiry itself is already stored by
// the time this runs, so this only protects the owner's inbox from flooding.
const RATE_LIMIT = new RateLimiter(5, 60_000)

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return json({ ok: false, reason: 'method_not_allowed' }, 405)
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return json({ ok: false, reason: 'invalid_json' }, 400)
  }

  const parsed = cleanEnquiry(body)
  if (!parsed.ok) {
    return json({ ok: false, reason: parsed.reason }, 400)
  }

  const { name, email, phone, company, service, message, submissionId } =
    parsed.enquiry

  const ip =
    (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'unknown'
  if (
    RATE_LIMIT.hit(`ip:${ip}`) || RATE_LIMIT.hit(`email:${email.toLowerCase()}`)
  ) {
    return json({ ok: false, reason: 'rate_limited' }, 429)
  }

  // The enquiry is already saved; a failed notification must never make the
  // form look like it lost the message.
  try {
    const result = await sendTemplateEmail('contact-enquiry', OWNER_EMAIL, {
      templateData: {
        name,
        email,
        phone,
        company,
        service,
        message,
        submittedAt: new Date().toISOString(),
      },
      idempotencyKey: `contact-enquiry-${submissionId}`,
      replyTo: email,
    })

    if (!result.sent) {
      return json({ ok: true, sent: false, reason: result.reason })
    }
    return json({ ok: true, sent: true })
  } catch (error) {
    const code = (error as { code?: string })?.code
    if (code === 'domain_not_verified') {
      return json({ ok: true, sent: false, reason: 'domain_not_verified' })
    }
    if (code === 'emails_disabled') {
      return json({ ok: true, sent: false, reason: 'emails_disabled' })
    }
    return json({ ok: true, sent: false, reason: 'send_failed' })
  }
})
