'use server'

import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export interface WaitlistFormState {
  message: string
  success?: boolean
  error?: string
}

export async function joinWaitlist(
  prevState: WaitlistFormState,
  formData: FormData
): Promise<WaitlistFormState> {
  const rawEmail = formData.get('email') as string

  // Validate email
  const validatedFields = waitlistSchema.safeParse({ email: rawEmail })

  if (!validatedFields.success) {
    return {
      message: 'Invalid email',
      error: validatedFields.error.flatten().fieldErrors.email?.[0] || 'Please enter a valid email',
    }
  }

  const { email } = validatedFields.data

  try {
    const supabase = await createClient()

    // Try to insert - will fail on duplicate due to UNIQUE constraint
    const { error: insertError } = await supabase
      .from('waitlist_subscribers')
      .insert({ email })

    if (insertError) {
      // Check if it's a duplicate email error
      if (insertError.code === '23505') {
        // Unique violation - email already exists
        return {
          message: "You're already on the list!",
          success: true,
        }
      }

      console.error('Error joining waitlist:', insertError)
      return {
        message: 'Something went wrong',
        error: 'Failed to join waitlist. Please try again.',
      }
    }

    return {
      message: "You're on the list!",
      success: true,
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      message: 'Something went wrong',
      error: 'An unexpected error occurred. Please try again.',
    }
  }
}


