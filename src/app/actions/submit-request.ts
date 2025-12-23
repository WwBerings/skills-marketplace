'use server'

import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

const requestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company_team: z.string().min(2, 'Company/Team must be at least 2 characters'),
  use_case: z.string().min(20, 'Use case must be at least 20 characters'),
  selected_items: z.string().min(1, 'Please select at least one skill or agent'),
})

export interface FormState {
  message: string
  success?: boolean
  errors?: {
    name?: string[]
    email?: string[]
    company_team?: string[]
    use_case?: string[]
    selected_items?: string[]
  }
}

export async function submitRequest(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Extract form data
  const rawFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    company_team: formData.get('company_team') as string,
    use_case: formData.get('use_case') as string,
    selected_items: formData.get('selected_items') as string,
  }

  // Validate form data
  const validatedFields = requestSchema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      message: 'Please fix the errors below',
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, company_team, use_case, selected_items } = validatedFields.data

  // Parse selected items
  let parsedItems: Array<{ id: string; name: string; type: 'skill' | 'agent' }>
  try {
    parsedItems = JSON.parse(selected_items)
    if (!Array.isArray(parsedItems) || parsedItems.length === 0) {
      return {
        message: 'Please select at least one skill or agent',
        errors: {
          selected_items: ['Please select at least one skill or agent'],
        },
      }
    }
  } catch (error) {
    return {
      message: 'Invalid selection format',
      errors: {
        selected_items: ['Invalid selection format'],
      },
    }
  }

  try {
    const supabase = await createClient()

    // Insert into requests table
    const { data: requestData, error: requestError } = await supabase
      .from('requests')
      .insert({
        name,
        email,
        company_team,
        use_case,
        status: 'pending',
      })
      .select()
      .single()

    if (requestError) {
      console.error('Error inserting request:', requestError)
      return {
        message: 'Failed to submit request. Please try again.',
      }
    }

    // Insert request items
    const itemsToInsert = parsedItems.map((item) => ({
      request_id: requestData.id,
      item_type: item.type,
      item_name: item.name,
    }))

    const { error: itemsError } = await supabase
      .from('request_items')
      .insert(itemsToInsert)

    if (itemsError) {
      console.error('Error inserting request items:', itemsError)
      // Note: The request was created, but items failed
      // In production, you might want to handle this differently
      return {
        message: 'Request submitted but some items failed to save. Please contact support.',
      }
    }

    return {
      message: 'Request submitted! We\'ll review and get back to you soon.',
      success: true,
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      message: 'An unexpected error occurred. Please try again.',
    }
  }
}

