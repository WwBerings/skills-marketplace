"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Loader2 } from "lucide-react"
import { submitCustomRequest, CustomFormState } from "@/app/actions/submit-custom-request"
import { useActionState } from "react"

const BUSINESS_CATEGORIES = [
  { id: "content", label: "Content Creation & Distribution" },
  { id: "sales", label: "Sales & Lead Generation" },
  { id: "automation", label: "Marketing Automation & Workflows" },
  { id: "seo", label: "SEO & Analytics" },
  { id: "email", label: "Email Marketing & Nurture" },
  { id: "research", label: "Customer Research & Intelligence" },
  { id: "social", label: "Social Media Management" },
  { id: "data", label: "Data Integration & Reporting" },
  { id: "other", label: "Other" },
]

const TEAM_SIZES = [
  "Just me",
  "2-5 people",
  "6-10 people",
  "11-20 people",
  "20+ people",
]

const TIMELINES = [
  "ASAP (1-2 weeks)",
  "Within a month",
  "Within 3 months",
  "Just exploring",
]

interface FormData {
  business_category: string
  current_process: string
  pain_points: string
  desired_outcome: string
  tools_used: string
  team_size: string
  name: string
  email: string
  company_team: string
  timeline: string
}

const initialFormData: FormData = {
  business_category: "",
  current_process: "",
  pain_points: "",
  desired_outcome: "",
  tools_used: "",
  team_size: "",
  name: "",
  email: "",
  company_team: "",
  timeline: "",
}

const initialState: CustomFormState = {
  message: "",
}

export default function CustomRequestSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [state, formAction, pending] = useActionState(submitCustomRequest, initialState)
  const [showSuccess, setShowSuccess] = useState(false)

  if (state.success && !showSuccess) {
    setShowSuccess(true)
  }

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.business_category !== ""
      case 2:
        return formData.current_process.trim() !== "" && formData.pain_points.trim() !== ""
      case 3:
        return formData.desired_outcome.trim() !== ""
      case 4:
        return (
          formData.name.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.company_team.trim() !== ""
        )
      default:
        return false
    }
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }


  if (showSuccess) {
    return (
      <section id="custom-request" className="py-16 bg-background">
        <div className="max-w-[1320px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-lg shadow-sm border border-border p-12 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-green-500/10 p-4">
                <Check className="h-12 w-12 text-green-500" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Request Received!
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              {state.message || "Thanks! I'll review your requirements and get back to you within 24-48 hours with a proposal."}
            </p>
            <button
              onClick={() => {
                setShowSuccess(false)
                setCurrentStep(1)
                setFormData(initialFormData)
              }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Submit Another Request
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="custom-request" className="py-16 bg-background">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Need Something Custom?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your challenge and we'll build an AI agent tailored to your needs.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-sm border border-border p-8 max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-colors ${
                      step < currentStep
                        ? "bg-primary text-primary-foreground"
                        : step === currentStep
                        ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {step < currentStep ? <Check className="h-4 w-4" /> : step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 rounded transition-colors ${
                        step < currentStep ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Step {currentStep} of 4
            </p>
          </div>

          {currentStep > 1 && formData.business_category && (
            <div className="mb-6 p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Selected Category:</span>
                <span className="text-sm font-semibold text-foreground">
                  {formData.business_category}
                </span>
              </div>
            </div>
          )}

          <form action={formAction}>
            <input type="hidden" name="business_category" value={formData.business_category} />
            <input type="hidden" name="current_process" value={formData.current_process} />
            <input type="hidden" name="pain_points" value={formData.pain_points} />
            <input type="hidden" name="desired_outcome" value={formData.desired_outcome} />
            <input type="hidden" name="tools_used" value={formData.tools_used} />
            <input type="hidden" name="team_size" value={formData.team_size} />
            <input type="hidden" name="timeline" value={formData.timeline || ''} />
            
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      What type of challenge are you trying to solve?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {BUSINESS_CATEGORIES.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => updateFormData("business_category", category.label)}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            formData.business_category === category.label
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="text-sm font-medium text-foreground">
                            {category.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      Tell us about your current process
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          How do you handle this today? *
                        </label>
                        <textarea
                          value={formData.current_process}
                          onChange={(e) => updateFormData("current_process", e.target.value)}
                          rows={4}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground resize-none"
                          placeholder="e.g., We manually copy content between platforms, taking 3-4 hours per piece..."
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          What's not working? *
                        </label>
                        <textarea
                          value={formData.pain_points}
                          onChange={(e) => updateFormData("pain_points", e.target.value)}
                          rows={4}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground resize-none"
                          placeholder="e.g., Time-consuming, inconsistent formatting, hard to maintain brand voice..."
                          required
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      What would success look like?
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Ideal outcome *
                        </label>
                        <textarea
                          value={formData.desired_outcome}
                          onChange={(e) => updateFormData("desired_outcome", e.target.value)}
                          rows={4}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground resize-none"
                          placeholder="e.g., Transform one blog post into 10 social posts in 10 minutes, maintaining brand voice..."
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Tools you currently use (optional)
                        </label>
                        <input
                          type="text"
                          value={formData.tools_used}
                          onChange={(e) => updateFormData("tools_used", e.target.value)}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                          placeholder="e.g., Notion, HubSpot, WordPress, ChatGPT..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Team size (optional)
                        </label>
                        <select
                          value={formData.team_size}
                          onChange={(e) => updateFormData("team_size", e.target.value)}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                        >
                          <option value="">Select team size</option>
                          {TEAM_SIZES.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                          placeholder="john.doe@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company/Team *
                        </label>
                        <input
                          type="text"
                          name="company_team"
                          value={formData.company_team}
                          onChange={(e) => updateFormData("company_team", e.target.value)}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                          placeholder="Marketing Team"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {state.message && !state.success && (
              <div className="mt-6 bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg">
                <div className="font-semibold mb-2">{state.message}</div>
                {state.errors && (
                  <div className="text-sm space-y-1">
                    {Object.entries(state.errors).map(([field, errors]) => (
                      <div key={field}>
                        <strong>{field}:</strong> {errors?.join(', ')}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-4 mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={pending}
                  className="flex-1 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Back
                </button>
              )}
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!validateStep(currentStep)}
                  className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={pending || !validateStep(4)}
                  className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {pending ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

