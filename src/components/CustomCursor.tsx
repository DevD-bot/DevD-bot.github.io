import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<SVGSVGElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const position = useRef({ x: 0, y: 0 })
  const smoothPosition = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>(0)
  const rotation = useRef(0)

  useEffect(() => {
    // Check if touch device — don't show custom cursor on mobile
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, [data-clickable], .hover-lift')
      setIsPointer(!!interactiveEl)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseOver)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    document.documentElement.addEventListener("mouseenter", handleMouseEnter)

    // Smooth animation loop
    const animate = () => {
      // Lerp towards target
      smoothPosition.current.x += (position.current.x - smoothPosition.current.x) * 0.15
      smoothPosition.current.y += (position.current.y - smoothPosition.current.y) * 0.15

      // Rotate text continuously
      rotation.current += 0.4

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${smoothPosition.current.x}px, ${smoothPosition.current.y}px)`
      }
      if (textRef.current) {
        textRef.current.style.transform = `rotate(${rotation.current}deg)`
      }

      rafId.current = requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
      cancelAnimationFrame(rafId.current)
    }
  }, [isVisible])

  // Don't render on touch devices (handled in useEffect, but also guard render)
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null
  }

  const text = "SCROLL  ✦  SCROLL  ✦  "
  const chars = text.split("")
  const radius = 32

  return (
    <>
      {/* Global cursor hide */}
      <style>{`
        *, *::before, *::after {
          cursor: none !important;
        }
      `}</style>

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {/* Center dot */}
        <div
          className="absolute rounded-full transition-all duration-300 ease-out"
          style={{
            width: isPointer ? 48 : 6,
            height: isPointer ? 48 : 6,
            top: isPointer ? -24 : -3,
            left: isPointer ? -24 : -3,
            backgroundColor: isPointer ? "hsl(var(--primary) / 0.12)" : "hsl(var(--primary))",
            border: isPointer ? "2px solid hsl(var(--primary) / 0.5)" : "none",
          }}
        />

        {/* Pointer icon — shown when hovering interactive elements */}
        {isPointer && (
          <div
            className="absolute text-primary transition-all duration-300"
            style={{
              top: -8,
              left: -6,
              fontSize: "16px",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
            </svg>
          </div>
        )}

        {/* Circular SCROLL text — hidden when pointer */}
        <svg
          ref={textRef}
          className="absolute transition-all duration-500 ease-out"
          style={{
            width: isPointer ? 0 : 80,
            height: isPointer ? 0 : 80,
            top: isPointer ? 0 : -40,
            left: isPointer ? 0 : -40,
            opacity: isPointer ? 0 : 0.5,
          }}
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="circlePath"
              d={`M 50, 50 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            />
          </defs>
          <text
            className="fill-foreground"
            style={{
              fontSize: "10.5px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              letterSpacing: "3px",
            }}
          >
            <textPath href="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    </>
  )
}
