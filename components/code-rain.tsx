'use client'

import { useEffect, useRef } from 'react'

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const columns = canvas.width / 20
    const drops: number[] = Array(Math.floor(columns)).fill(1)

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)' // Faint background fade
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00ff99' // Neon green color
      ctx.font = '18px monospace'

      drops.forEach((y, i) => {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)]
        ctx.fillText(text, i * 20, y * 20)

        if (y * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      })
    }

    const interval = setInterval(draw, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  )
}
