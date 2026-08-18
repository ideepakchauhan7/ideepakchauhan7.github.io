"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  speed: number;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    let frameId = 0;
    let destroyed = false;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
    }

    function makeParticles(count: number) {
      particles = Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * width,
        y: (Math.random() - 0.5) * height,
        z: Math.random() * width,
        speed: 0.6 + Math.random() * 0.9,
      }));
    }

    resize();
    makeParticles(180);
    window.addEventListener("resize", () => {
      resize();
      makeParticles(180);
    });

    function draw() {
      if (destroyed || !ctx) return;
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.z -= p.speed;
          if (p.z <= 1) {
            p.x = (Math.random() - 0.5) * width;
            p.y = (Math.random() - 0.5) * height;
            p.z = width;
          }
        }
        const k = 220 / p.z;
        const sx = p.x * k + cx;
        const sy = p.y * k + cy;
        if (sx < 0 || sx > width || sy < 0 || sy > height) continue;
        const size = Math.max(0.3, (1 - p.z / width) * 2.2);
        const alpha = Math.max(0, 1 - p.z / width) * 0.7;
        ctx.beginPath();
        ctx.fillStyle = `rgba(198, 255, 61, ${alpha})`;
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
      }
      frameId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      destroyed = true;
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60"
      aria-hidden="true"
    />
  );
}
