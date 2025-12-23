"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import WordReveal from "@/components/ui/word-reveal"
import { ParticleAnimation } from "@/components/particle-animation"

interface HeroProps {
  className?: string
  onBrowseCatalog?: () => void
  onRequestCustom?: () => void
}

export default function Hero({ 
  className,
  onBrowseCatalog,
  onRequestCustom
}: HeroProps) {
  return (
    <div
      id="hero"
      className={cn(
        "relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black",
        className
      )}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-zinc-900/50 to-black" />

      {/* Particle Animation Background (replaces gradient blob) */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <ParticleAnimation />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <WordReveal
            text="AI Agents & Marketing Skills Built for You"
            className="mb-6"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 2.5 }}
            className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
          >
            Browse ready-to-use solutions or request a custom build tailored to your workflow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={onBrowseCatalog}
              className="bg-white text-black hover:bg-zinc-200 transition-colors px-8 py-4 rounded-lg text-base font-medium"
            >
              Browse Agent Catalog
            </button>
            <button
              onClick={onRequestCustom}
              className="border border-zinc-700 text-white hover:bg-zinc-800 transition-colors px-8 py-4 rounded-lg text-base font-medium"
            >
              Request AI Agent Build
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

