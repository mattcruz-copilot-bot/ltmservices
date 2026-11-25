import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'
import { OWNER_EMAIL } from '../enquiry-validation.ts'

interface ContactEnquiryProps {
  name?: string
  email?: string
  phone?: string
  company?: string
  service?: string
  message?: string
  submittedAt?: string
}

const GOLD = '#d29b2d'
const DARK = '#101818'
const INK = '#1a1a1a'
const MUTED = '#5b6470'
const LINE = '#e3e6eb'
const SOFT = '#f7f8fa'

const formatWhen = (value?: string) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/London',
  }) + ' UK time'
}

const Field = ({ label, value }: { label: string; value?: string }) => (
  <Section style={fieldRow}>
    <Text style={fieldLabel}>{label}</Text>
    <Text style={fieldValue}>{value && value.trim() ? value : 'Not given'}</Text>
  </Section>
)

const Email = ({
  name,
  email,
  phone,
  company,
  service,
  message,
  submittedAt,
}: ContactEnquiryProps) => {
  const when = formatWhen(submittedAt)

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        {name ? `New enquiry from ${name}` : 'New website enquiry'}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={brandBar}>
            <Text style={brandName}>
              LTM <span style={brandAccent}>Services</span>
            </Text>
            <Text style={brandTag}>Enquiry notification</Text>
          </Section>

          <Section style={content}>
            <Heading style={heading}>New enquiry received</Heading>
            <Text style={subhead}>
              Someone has sent a message through the LTM Services website
              contact form.
            </Text>

            {when ? <Text style={timestamp}>Received {when}</Text> : null}

            <Section style={details}>
              <Field label="Name" value={name} />
              <Field label="Email" value={email} />
              <Field label="Phone" value={phone} />
              <Field label="Company" value={company} />
              <Field label="Service required" value={service} />
            </Section>

            <Text style={messageLabel}>Message</Text>
            <Section style={messageBox}>
              <Text style={messageText}>
                {message && message.trim()
                  ? message
                  : 'No message was included with this enquiry.'}
              </Text>
            </Section>

            <Text style={note}>
              You can reply directly to this email — it is set to go back to the
              person who sent the enquiry.
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              LTM Services · Facilities Management &amp; Maintenance · London,
              United Kingdom
            </Text>
            <Text style={footerText}>info@ltm-ukservices.co.uk · 07944 885705</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New enquiry${data.name ? ` from ${data.name}` : ''} — LTM Services`,
  displayName: 'New enquiry notification',
  to: OWNER_EMAIL,
  previewData: {
    name: 'Jane Whitfield',
    email: 'jane@brunelgroup.co.uk',
    phone: '07944 885705',
    company: 'Brunel Group',
    service: 'Planned Preventative Maintenance',
    message:
      'We are looking for a PPM partner across three London sites and would like a quote. Could someone call us this week?',
    submittedAt: '2026-11-25T16:43:00Z',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Arial, Helvetica, sans-serif',
  margin: '0',
  padding: '0',
}

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  border: `1px solid ${LINE}`,
  borderRadius: '10px',
  overflow: 'hidden',
}

const brandBar = {
  backgroundColor: DARK,
  padding: '22px 28px',
  margin: '0',
}

const brandName = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: '700',
  letterSpacing: '0.06em',
  margin: '0',
  textTransform: 'uppercase' as const,
}

const brandAccent = {
  color: GOLD,
}

const brandTag = {
  color: GOLD,
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  margin: '6px 0 0',
}

const content = {
  padding: '28px',
  margin: '0',
}

const heading = {
  color: INK,
  fontSize: '22px',
  fontWeight: '700',
  margin: '0 0 8px',
}

const subhead = {
  color: MUTED,
  fontSize: '15px',
  lineHeight: '22px',
  margin: '0 0 18px',
}

const timestamp = {
  color: MUTED,
  fontSize: '13px',
  margin: '0 0 20px',
}

const details = {
  backgroundColor: SOFT,
  border: `1px solid ${LINE}`,
  borderRadius: '8px',
  padding: '4px 18px',
  margin: '0 0 22px',
}

const fieldRow = {
  padding: '12px 0',
  borderBottom: `1px solid ${LINE}`,
  margin: '0',
}

const fieldLabel = {
  color: GOLD,
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  margin: '0 0 4px',
}

const fieldValue = {
  color: INK,
  fontSize: '15px',
  lineHeight: '21px',
  margin: '0',
}

const messageLabel = {
  color: GOLD,
  fontSize: '11px',
  fontWeight: '700',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  margin: '0 0 8px',
}

const messageBox = {
  backgroundColor: SOFT,
  border: `1px solid ${LINE}`,
  borderLeft: `3px solid ${GOLD}`,
  borderRadius: '6px',
  padding: '16px 18px',
  margin: '0 0 18px',
}

const messageText = {
  color: INK,
  fontSize: '15px',
  lineHeight: '23px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
}

const note = {
  color: MUTED,
  fontSize: '13px',
  lineHeight: '19px',
  margin: '0',
}

const footer = {
  borderTop: `1px solid ${LINE}`,
  padding: '16px 28px',
  margin: '0',
}

const footerText = {
  color: MUTED,
  fontSize: '12px',
  lineHeight: '18px',
  margin: '0',
}
