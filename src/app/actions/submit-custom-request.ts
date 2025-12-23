'use server'

import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

const customRequestSchema = z.object({
  business_category: z.string().min(1, 'Please select a business category'),
  current_process: z.string().min(10, 'Please describe your current process'),
  pain_points: z.string().min(10, 'Please describe what is not working'),
  desired_outcome: z.string().min(10, 'Please describe your desired outcome'),
  tools_used: z.string().optional(),
  team_size: z.string().optional(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company_team: z.string().min(2, 'Company/Team must be at least 2 characters'),
  timeline: z.string().optional(),
})

export interface CustomFormState {
  message: string
  success?: boolean
  errors?: {
    business_category?: string[]
    current_process?: string[]
    pain_points?: string[]
    desired_outcome?: string[]
    tools_used?: string[]
    team_size?: string[]
    name?: string[]
    email?: string[]
    company_team?: string[]
    timeline?: string[]
  }
}

export async function submitCustomRequest(
  prevState: CustomFormState,
  formData: FormData
): Promise<CustomFormState> {
  // Extract form data
  const rawFormData = {
    business_category: formData.get('business_category') as string,
    current_process: formData.get('current_process') as string,
    pain_points: formData.get('pain_points') as string,
    desired_outcome: formData.get('desired_outcome') as string,
    tools_used: formData.get('tools_used') as string,
    team_size: formData.get('team_size') as string,
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    company_team: formData.get('company_team') as string,
    timeline: formData.get('timeline') as string,
  }

  // Validate form data
  const validatedFields = customRequestSchema.safeParse(rawFormData)

  if (!validatedFields.success) {
    console.error('Validation errors:', validatedFields.error.flatten().fieldErrors)
    return {
      message: 'Please fix the errors in the form',
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const {
    business_category,
    current_process,
    pain_points,
    desired_outcome,
    tools_used,
    team_size,
    name,
    email,
    company_team,
    timeline,
  } = validatedFields.data

  try {
    const supabase = await createClient()

    // Insert into requests table with custom request fields
    const { data: requestData, error: requestError } = await supabase
      .from('requests')
      .insert({
        name,
        email,
        company_team,
        use_case: `Custom Request: ${business_category}`, // Use business_category as use_case for compatibility
        status: 'pending',
        request_type: 'custom',
        business_category,
        current_process,
        pain_points,
        desired_outcome,
        tools_used: tools_used || null,
        team_size: team_size || null,
        timeline: timeline || null,
      })
      .select()
      .single()

    if (requestError) {
      console.error('Error inserting custom request:', requestError)
      return {
        message: 'Failed to submit request. Please try again.',
      }
    }

    // No request_items needed for custom requests

    return {
      message: "Thanks! I'll review your requirements and get back to you within 24-48 hours with a proposal.",
      success: true,
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      message: 'An unexpected error occurred. Please try again.',
    }
  }
}

