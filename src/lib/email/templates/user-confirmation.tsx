import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components'
import * as React from 'react'

interface RequestData {
  name: string
  email: string
  company_team: string
  use_case: string
  selected_items: Array<{
    name: string
    type: 'skill' | 'agent'
  }>
}

export const UserConfirmationEmail = (requestData: RequestData) => (
  <Html>
    <Head />
    <Preview>Your skills and agents request has been received</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Request Received!</Heading>
        
        <Text style={text}>
          Hi {requestData.name},
        </Text>

        <Text style={text}>
          Thank you for your request. We've received your inquiry for the following skills and agents, and our team will review it shortly.
        </Text>

        <Hr style={hr} />

        <Section style={section}>
          <Heading as="h2" style={h2}>What You Requested</Heading>
          
          {requestData.selected_items.filter(item => item.type === 'skill').length > 0 && (
            <>
              <Heading as="h3" style={h3}>Skills</Heading>
              {requestData.selected_items
                .filter(item => item.type === 'skill')
                .map((item, index) => (
                  <Text key={index} style={listItem}>
                    • {item.name}
                  </Text>
                ))}
            </>
          )}

          {requestData.selected_items.filter(item => item.type === 'agent').length > 0 && (
            <>
              <Heading as="h3" style={h3}>Agents</Heading>
              {requestData.selected_items
                .filter(item => item.type === 'agent')
                .map((item, index) => (
                  <Text key={index} style={listItem}>
                    • {item.name}
                  </Text>
                ))}
            </>
          )}
        </Section>

        <Hr style={hr} />

        <Section style={section}>
          <Heading as="h2" style={h2}>What Happens Next?</Heading>
          <Text style={text}>
            1. Our team will review your request and use case
          </Text>
          <Text style={text}>
            2. We'll prepare the requested skills and agents for you
          </Text>
          <Text style={text}>
            3. You'll receive follow-up instructions via email within 24-48 hours
          </Text>
        </Section>

        <Hr style={hr} />

        <Text style={footer}>
          If you have any questions in the meantime, feel free to reply to this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default UserConfirmationEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const h1 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '32px',
  padding: '0 48px',
  margin: '30px 0',
}

const h2 = {
  color: '#1f2937',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '24px',
  margin: '16px 0 8px',
}

const h3 = {
  color: '#4b5563',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '24px',
  margin: '12px 0 8px',
}

const text = {
  color: '#4b5563',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '8px 0',
}

const listItem = {
  color: '#4b5563',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '4px 0',
  paddingLeft: '8px',
}

const section = {
  padding: '0 48px',
}

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 48px',
}

const footer = {
  color: '#9ca3af',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 48px',
  marginTop: '32px',
}

