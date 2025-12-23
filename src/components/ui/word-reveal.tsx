"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface WordRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export default function WordReveal({ 
  text, 
  className,
  delay = 0.2,
  duration = 0.05
}: WordRevealProps) {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white",
        className
      )}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}

