'use client'

import React, { useRef, useEffect, useState } from 'react'

export function ParticleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const animationFrameIdRef = useRef<number>(0)
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Intersection Observer to pause when off-screen
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(canvas)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
        setIsMobile(window.innerWidth < 768)
      }
    }

    updateCanvasSize()

    let particles: {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      scatteredColor: string
      life: number
    }[] = []

    let textImageData: ImageData | null = null
    let frameCount = 0
    const maxDistance = 120 // Reduced from 150 for better performance
    const maxDistanceSquared = maxDistance * maxDistance // Cache squared distance

    function createTextImage() {
      if (!ctx || !canvas) return 0

      ctx.fillStyle = 'white'
      ctx.save()
      
      // Create a full-canvas rectangle shape from particles (edge-to-edge, top-to-bottom)
      const rectWidth = canvas.width   // Full canvas width
      const rectHeight = canvas.height // Full canvas height
      const rectX = 0  // Start at left edge
      const rectY = 0  // Start at top edge
      
      ctx.fillRect(rectX, rectY, rectWidth, rectHeight)

      ctx.restore()

      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      return 1
    }

    function createParticle(scale: number) {
      if (!ctx || !canvas || !textImageData) return null

      const data = textImageData.data

      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)

        if (data[(y * canvas.width + x) * 4 + 3] > 128) {
          return {
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 1.5 + 0.5,
            color: 'rgb(55, 204, 186)', // Pro4all Green
            scatteredColor: 'rgb(226, 83, 19)', // Pro4all Orange
            life: Math.random() * 100 + 50
          }
        }
      }

      return null
    }

    function createInitialParticles(scale: number) {
      if (!canvas) return
      const baseParticleCount = isMobile ? 2500 : 4000
      const dpr = window.devicePixelRatio || 1
      const particleCount = Math.ceil(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)) / dpr)
      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle(scale)
        if (particle) particles.push(particle)
      }
    }

    function animate(scale: number) {
      if (!ctx || !canvas) return
      
      // Skip animation if not visible or reduced motion is preferred
      if (!isVisible || prefersReducedMotion) {
        // Draw static version
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        particles.forEach((p) => {
          ctx.fillStyle = p.color
          ctx.fillRect(p.baseX, p.baseY, p.size, p.size)
        })
        animationFrameIdRef.current = requestAnimationFrame(() => animate(scale))
        return
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { x: mouseX, y: mouseY } = mousePositionRef.current
      frameCount++

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distanceSquared = dx * dx + dy * dy // Avoid Math.sqrt for performance

        if (distanceSquared < maxDistanceSquared && (isTouchingRef.current || !('ontouchstart' in window))) {
          const distance = Math.sqrt(distanceSquared) // Only calculate when needed
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 40
          const moveY = Math.sin(angle) * force * 40
          p.x = p.baseX - moveX
          p.y = p.baseY - moveY
          
          ctx.fillStyle = p.scatteredColor
        } else {
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1
          ctx.fillStyle = p.color
        }

        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.life--
        if (p.life <= 0) {
          const newParticle = createParticle(scale)
          if (newParticle) {
            particles[i] = newParticle
          } else {
            particles.splice(i, 1)
            i--
          }
        }
      }

      // Only recreate particles every 60 frames to reduce overhead
      if (frameCount % 60 === 0) {
        const baseParticleCount = isMobile ? 2500 : 4000
        const dpr = window.devicePixelRatio || 1
        const targetParticleCount = Math.ceil(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)) / dpr)
        
        while (particles.length < targetParticleCount) {
          const newParticle = createParticle(scale)
          if (newParticle) particles.push(newParticle)
          else break // Exit if we can't create more particles
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(() => animate(scale))
    }

    const scale = createTextImage()
    createInitialParticles(scale)
    animate(scale)

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
      
      resizeTimeoutRef.current = setTimeout(() => {
        updateCanvasSize()
        const newScale = createTextImage()
        particles = []
        createInitialParticles(newScale)
      }, 150)
    }

    const handleMove = (x: number, y: number) => {
      const rect = canvas.getBoundingClientRect()
      mousePositionRef.current = { x: x - rect.left, y: y - rect.top }
    }

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    const handleTouchStart = () => {
      isTouchingRef.current = true
    }

    const handleTouchEnd = () => {
      isTouchingRef.current = false
      mousePositionRef.current = { x: 0, y: 0 }
    }

    const handleMouseLeave = () => {
      if (!('ontouchstart' in window)) {
        mousePositionRef.current = { x: 0, y: 0 }
      }
    }

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
    canvas.addEventListener('mouseleave', handleMouseLeave)
    canvas.addEventListener('touchstart', handleTouchStart)
    canvas.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchend', handleTouchEnd)
      
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
      
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [isMobile, isVisible, prefersReducedMotion])

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full touch-none cursor-pointer"
      style={{ willChange: 'transform' }}
      aria-label="Interactive particle sphere animation"
    />
  )
}

