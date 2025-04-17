import React, { useRef, useEffect } from 'react';

/**
 * Subtle animated sound wave background for CTA section.
 * Renders multiple sine waves moving from right to left.
 */
const NUM_WAVES = 3;
const COLORS = [
  'rgba(255, 102, 0, 0.85)',   // neon orange
  'rgba(255, 165, 0, 0.75)',   // pure orange
  'rgba(255, 72, 0, 0.7)',     // vibrant red-orange
];

export default function SoundWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const setCanvasSize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setCanvasSize();
    const startTime = performance.now();

    function resize() {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize);

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const now = performance.now();
      const elapsed = (now - startTime) / 1000;
      for (let i = 0; i < NUM_WAVES; i++) {
        const amplitude = height * (0.08 + i * 0.03);
        const frequency = 1.4 + i * 0.25;
        const speed = 0.45 + i * 0.1;
        const phase = elapsed * speed + i * Math.PI / 3;
        const xStart = -width * 0.2;
        const xEnd = width * 1.2;
        ctx.beginPath();
        for (let x = xStart; x <= xEnd; x += 2) {
          const t = ((x - xStart) / (xEnd - xStart)) * Math.PI * frequency + phase;
          const y = height / 2 + Math.sin(t) * amplitude * Math.cos(phase + x * 0.0007);
          if (x === xStart) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = COLORS[i % COLORS.length];
        ctx.lineWidth = 520 - i * 1.2;
        ctx.shadowColor = COLORS[i % COLORS.length];
        ctx.shadowBlur = 28 - i * 6;
        ctx.globalAlpha = 1;
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
      animationRef.current = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  );
}
