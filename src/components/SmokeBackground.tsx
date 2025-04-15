"use client";
import React, { useRef, useEffect } from "react";

// Procedural smoke using canvas
export default function SmokeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Smoke particle system
    const NUM_PARTICLES = 16;
    const particles = Array.from({ length: NUM_PARTICLES }, (_, i) => ({
      x: width + Math.random() * width * 0.5,
      y: height * (0.2 + 0.6 * Math.random()),
      radius: 80 + 90 * Math.random(),
      alpha: 0.12 + 0.08 * Math.random(),
      speed: 0.12 + 0.05 * Math.random(),
      drift: -0.1 - 0.05 * Math.random(),
      offset: Math.random() * Math.PI * 2
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      // Black background
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);
      // Draw smoke
      particles.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        const x = p.x + Math.sin(Date.now() * 0.00018 + p.offset) * 30;
        const y = p.y + Math.sin(Date.now() * 0.00012 + p.offset) * 18;
        const grad = ctx.createRadialGradient(x, y, p.radius * 0.15, x, y, p.radius);
        grad.addColorStop(0, "#fff");
        grad.addColorStop(0.2, "#b3d1ff");
        grad.addColorStop(0.7, "#3a5372");
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
        // Animate
        p.x += p.drift * p.speed * (0.8 + Math.sin(Date.now() * 0.0001 + p.offset) * 0.2);
        if (p.x + p.radius < 0) {
          p.x = width + p.radius;
          p.y = height * (0.2 + 0.6 * Math.random());
          p.radius = 80 + 90 * Math.random();
          p.alpha = 0.12 + 0.08 * Math.random();
        }
      });
      animationRef.current = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
        background: "#000"
      }}
      width={typeof window !== "undefined" ? window.innerWidth : 1920}
      height={typeof window !== "undefined" ? window.innerHeight : 1080}
      aria-hidden="true"
    />
  );
}
