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

export const AdminNotificationEmail = (requestData: RequestData) => (
  <Html>
    <Head />
    <Preview>New request from {requestData.name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Skills & Agents Request</Heading>
        
        <Text style={text}>
          You have received a new request for skills and agents.
        </Text>

        <Section style={section}>
          <Heading as="h2" style={h2}>Contact Information</Heading>
          <Text style={text}>
            <strong>Name:</strong> {requestData.name}
          </Text>
          <Text style={text}>
            <strong>Email:</strong> {requestData.email}
          </Text>
          <Text style={text}>
            <strong>Company/Team:</strong> {requestData.company_team}
          </Text>
        </Section>

        <Hr style={hr} />

        <Section style={section}>
          <Heading as="h2" style={h2}>Use Case</Heading>
          <Text style={text}>{requestData.use_case}</Text>
        </Section>

        <Hr style={hr} />

        <Section style={section}>
          <Heading as="h2" style={h2}>Requested Items</Heading>
          
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

        <Text style={footer}>
          This request was submitted via the Skills & Agents Marketplace.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default AdminNotificationEmail

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

