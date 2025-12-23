import { Resend } from 'resend'
import { AdminNotificationEmail } from './templates/admin-notification'
import { UserConfirmationEmail } from './templates/user-confirmation'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface RequestData {
  name: string
  email: string
  company_team: string
  use_case: string
  selected_items: Array<{
    name: string
    type: 'skill' | 'agent'
  }>
}

export async function sendAdminNotification(requestData: RequestData) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.ADMIN_EMAIL!,
      subject: `New Skills/Agents Request from ${requestData.name}`,
      react: AdminNotificationEmail(requestData),
    })

    if (error) {
      console.error('Error sending admin notification:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error sending admin notification:', error)
    return { success: false, error }
  }
}

export async function sendUserConfirmation(requestData: RequestData) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: requestData.email,
      subject: 'Your Skills & Agents Request Has Been Received',
      react: UserConfirmationEmail(requestData),
    })

    if (error) {
      console.error('Error sending user confirmation:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error sending user confirmation:', error)
    return { success: false, error }
  }
}

export async function sendBothNotifications(requestData: RequestData) {
  const [adminResult, userResult] = await Promise.all([
    sendAdminNotification(requestData),
    sendUserConfirmation(requestData),
  ])

  return {
    admin: adminResult,
    user: userResult,
    success: adminResult.success && userResult.success,
  }
}

