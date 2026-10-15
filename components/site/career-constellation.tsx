'use client'

import React, { useEffect, useRef, useState } from 'react'

interface NodePoint {
  x: number
  y: number
  radius: number
  color: string
  label?: string
  glow?: number
  pulseSpeed?: number
  pulsePhase?: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  size: number
  alpha: number
  baseAlpha: number
  color: string
  shape: 'triangle' | 'circle'
  rotation: number
  rotSpeed: number
}

interface StreamParticle {
  pathIndex: number
  progress: number
  speed: number
  size: number
  color: string
}

const CHROMATIC_PALETTE = ['#8052FF', '#8052FF', '#FFB829', '#15846E', '#E056FD', '#00D2D3', '#FFFFFF']

const CAREER_DESTINATIONS = [
  { name: 'AI & Data Intelligence', angle: -0.85, distance: 0.88, color: '#8052FF' },
  { name: 'Engineering & Computing', angle: -0.45, distance: 0.92, color: '#8052FF' },
  { name: 'Medicine & Clinical', angle: -0.15, distance: 0.86, color: '#15846E' },
  { name: 'Management & Venture', angle: 0.2, distance: 0.9, color: '#FFB829' },
  { name: 'Law & Public Policy', angle: 0.5, distance: 0.84, color: '#8052FF' },
  { name: 'Design & Interaction', angle: 0.78, distance: 0.87, color: '#FFB829' },
  { name: 'Commerce & High Finance', angle: 1.05, distance: 0.82, color: '#15846E' },
]

const FLOATING_SIGNALS = [
  { text: 'Career clarity', style: 'top-6 left-8', accent: 'violet' },
  { text: 'Course selection', style: 'top-20 right-10', accent: 'default' },
  { text: 'College fit', style: 'bottom-28 right-8', accent: 'amber' },
  { text: 'Placement records', style: 'bottom-10 left-12', accent: 'violet' },
  { text: 'Scholarships', style: 'top-1/2 -translate-y-16 right-4', accent: 'default' },
  { text: 'Future demand', style: 'bottom-36 left-4', accent: 'default' },
]

export function CareerConstellation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let width = 0
    let height = 0
    let dpr = 1

    const isMobile = window.innerWidth < 768
    const ambientCount = isMobile ? 90 : 210
    const streamCount = isMobile ? 35 : 80

    let ambientParticles: Particle[] = []
    let streamParticles: StreamParticle[] = []
    let paths: Array<{ start: NodePoint; control: NodePoint; end: NodePoint; color: string; label: string }> = []
    let centerNode: NodePoint = { x: 0, y: 0, radius: 8, color: '#FFFFFF', pulsePhase: 0 }

    const resize = () => {
      if (!containerRef.current || !canvas) return
      const rect = containerRef.current.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)

      // Center "YOU" Node
      const cx = width * (isMobile ? 0.5 : 0.38)
      const cy = height * 0.52
      centerNode = {
        x: cx,
        y: cy,
        radius: isMobile ? 6 : 7.5,
        color: '#FFFFFF',
        pulsePhase: 0,
      }

      // Generate paths towards destinations
      paths = CAREER_DESTINATIONS.map((dest) => {
        const radiusDist = Math.min(width, height) * (isMobile ? 0.42 : 0.48) * dest.distance
        const ex = cx + Math.cos(dest.angle) * radiusDist
        const ey = cy + Math.sin(dest.angle) * radiusDist

        // Quadratic curve control point with slight arc
        const midAngle = dest.angle + (Math.sin(dest.angle * 2) * 0.25)
        const midDist = radiusDist * 0.55
        const mx = cx + Math.cos(midAngle) * midDist
        const my = cy + Math.sin(midAngle) * midDist

        return {
          start: centerNode,
          control: { x: mx, y: my, radius: 2, color: dest.color },
          end: { x: ex, y: ey, radius: 4.5, color: dest.color, label: dest.name },
          color: dest.color,
          label: dest.name,
        }
      })

      // Generate ambient particles with Refero signature chromatic outlined triangles
      ambientParticles = Array.from({ length: ambientCount }).map(() => {
        const isTriangle = Math.random() > 0.4
        const color = CHROMATIC_PALETTE[Math.floor(Math.random() * CHROMATIC_PALETTE.length)]
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: Math.random() * 1.5 + 0.6,
          size: Math.random() * 5.5 + 3.5,
          alpha: Math.random() * 0.6 + 0.25,
          baseAlpha: Math.random() * 0.5 + 0.25,
          color,
          shape: isTriangle ? 'triangle' : 'circle',
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.015,
        }
      })

      // Generate flowing stream particles
      streamParticles = Array.from({ length: streamCount }).map(() => ({
        pathIndex: Math.floor(Math.random() * paths.length),
        progress: Math.random(),
        speed: 0.0015 + Math.random() * 0.003,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.3 ? '#8052FF' : '#FFFFFF',
      }))
    }

    resize()
    window.addEventListener('resize', resize)

    // Render loop
    let tick = 0
    const render = () => {
      tick++
      ctx.clearRect(0, 0, width, height)

      // 1. Draw subtle ambient particles & proximity links
      for (let i = 0; i < ambientParticles.length; i++) {
        const p = ambientParticles[i]
        p.x += p.vx
        p.y += p.vy
        p.rotation += p.rotSpeed

        // Wrap boundaries
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // Mouse hover proximity interaction
        let alpha = p.baseAlpha
        if (mousePos) {
          const dx = p.x - mousePos.x
          const dy = p.y - mousePos.y
          const dist = Math.hypot(dx, dy)
          if (dist < 120) {
            const proximity = 1 - dist / 120
            alpha = Math.min(1, alpha + proximity * 0.6)
            p.x += (mousePos.x - p.x) * 0.012
            p.y += (mousePos.y - p.y) * 0.012
          }
        }

        if (p.shape === 'triangle') {
          // Outlined equilateral triangle (Refero signature)
          ctx.save()
          ctx.translate(p.x, p.y)
          ctx.rotate(p.rotation)
          ctx.beginPath()
          const h = p.size * 0.866
          ctx.moveTo(0, -h * 0.66)
          ctx.lineTo(p.size * 0.5, h * 0.33)
          ctx.lineTo(-p.size * 0.5, h * 0.33)
          ctx.closePath()
          ctx.strokeStyle = p.color
          ctx.lineWidth = 1.1
          ctx.globalAlpha = alpha
          ctx.stroke()
          ctx.restore()
        } else {
          ctx.fillStyle = p.color
          ctx.globalAlpha = alpha
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // 2. Draw connecting pathways (spline curves)
      paths.forEach((path) => {
        ctx.strokeStyle = path.color
        ctx.globalAlpha = 0.16
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(path.start.x, path.start.y)
        ctx.quadraticCurveTo(path.control.x, path.control.y, path.end.x, path.end.y)
        ctx.stroke()

        // Subtle glowing filament
        ctx.strokeStyle = path.color
        ctx.globalAlpha = 0.06
        ctx.lineWidth = 3.5
        ctx.beginPath()
        ctx.moveTo(path.start.x, path.start.y)
        ctx.quadraticCurveTo(path.control.x, path.control.y, path.end.x, path.end.y)
        ctx.stroke()

        // Destination Node
        ctx.globalAlpha = 0.85
        ctx.fillStyle = path.color
        ctx.beginPath()
        ctx.arc(path.end.x, path.end.y, path.end.radius, 0, Math.PI * 2)
        ctx.fill()

        // Destination subtle outer ring
        ctx.strokeStyle = path.color
        ctx.globalAlpha = 0.35
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(path.end.x, path.end.y, path.end.radius + 4, 0, Math.PI * 2)
        ctx.stroke()

        // Destination Label text
        if (!isMobile) {
          ctx.fillStyle = '#BDBDBD'
          ctx.globalAlpha = 0.75
          ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
          const textX = path.end.x > centerNode.x ? path.end.x + 10 : path.end.x - 10
          ctx.textAlign = path.end.x > centerNode.x ? 'left' : 'right'
          ctx.textBaseline = 'middle'
          ctx.fillText(path.label, textX, path.end.y)
        }
      })

      // 3. Draw flowing stream particles along pathways
      streamParticles.forEach((sp) => {
        sp.progress += sp.speed
        if (sp.progress > 1) {
          sp.progress = 0
          sp.pathIndex = Math.floor(Math.random() * paths.length)
        }

        const path = paths[sp.pathIndex]
        if (!path) return

        // Quadratic bezier formula: B(t) = (1-t)^2 P0 + 2(1-t)t P1 + t^2 P2
        const t = sp.progress
        const mt = 1 - t
        const px = mt * mt * path.start.x + 2 * mt * t * path.control.x + t * t * path.end.x
        const py = mt * mt * path.start.y + 2 * mt * t * path.control.y + t * t * path.end.y

        // Fade in near center, fade out at end
        const edgeFade = Math.sin(t * Math.PI)
        ctx.fillStyle = sp.color
        ctx.globalAlpha = edgeFade * 0.95
        ctx.beginPath()
        ctx.arc(px, py, sp.size, 0, Math.PI * 2)
        ctx.fill()

        // Glow halo on larger particles
        if (sp.size > 1.8) {
          ctx.globalAlpha = edgeFade * 0.25
          ctx.beginPath()
          ctx.arc(px, py, sp.size * 2.8, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // 4. Central Node "YOU" (The Student)
      const pulse = Math.sin(tick * 0.04) * 3
      // Outer aura
      const grad = ctx.createRadialGradient(
        centerNode.x,
        centerNode.y,
        0,
        centerNode.x,
        centerNode.y,
        28 + pulse
      )
      grad.addColorStop(0, 'rgba(128, 82, 255, 0.55)')
      grad.addColorStop(0.5, 'rgba(128, 82, 255, 0.15)')
      grad.addColorStop(1, 'rgba(128, 82, 255, 0)')

      ctx.fillStyle = grad
      ctx.globalAlpha = 1
      ctx.beginPath()
      ctx.arc(centerNode.x, centerNode.y, 28 + pulse, 0, Math.PI * 2)
      ctx.fill()

      // Center solid core
      ctx.fillStyle = '#FFFFFF'
      ctx.globalAlpha = 1
      ctx.beginPath()
      ctx.arc(centerNode.x, centerNode.y, centerNode.radius, 0, Math.PI * 2)
      ctx.fill()

      // "YOU" Label
      ctx.fillStyle = '#FFFFFF'
      ctx.globalAlpha = 0.95
      ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('YOU', centerNode.x, centerNode.y + 17)

      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [mousePos])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] select-none pointer-events-auto"
      onMouseMove={(e) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }}
      onMouseLeave={() => setMousePos(null)}
    >
      {/* HTML5 Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* Floating Microcopy Signals (Digital constellation HUD) */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {FLOATING_SIGNALS.map((sig, idx) => {
          const isViolet = sig.accent === 'violet'
          const isAmber = sig.accent === 'amber'
          return (
            <div
              key={sig.text}
              className={`absolute ${sig.style} transition-all duration-700`}
              style={{
                animation: `float-slow 8s ease-in-out infinite ${idx * 1.3}s`,
              }}
            >
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-mono tracking-tight backdrop-blur-sm ${
                  isViolet
                    ? 'border border-[#8052FF]/30 bg-[#8052FF]/10 text-[#8052FF] dark:text-[#d0beff]'
                    : isAmber
                      ? 'border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-[#FFD066]'
                      : 'border border-border bg-card/90 text-foreground/80 shadow-sm'
                }`}
              >
                <span
                  className={`size-1.5 rounded-full ${
                    isViolet ? 'bg-[#8052FF]' : isAmber ? 'bg-[#FFB829]' : 'bg-[#00C2FF]'
                  }`}
                />
                {sig.text}
              </div>
            </div>
          )
        })}
      </div>

      {/* Subtle Bottom Caption */}
      <div className="absolute bottom-3 left-4 sm:left-6 flex items-center gap-2 text-[11.5px] font-mono text-muted-foreground pointer-events-none">
        <span className="size-2 rounded-full bg-[#8052FF] animate-pulse" />
        <span>Constellation of 200+ Live Pathways</span>
      </div>
    </div>
  )
}
