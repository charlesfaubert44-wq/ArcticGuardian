"use client";

import { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 3;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    class AuroraWave {
      yOffset: number;
      speed: number;
      color: string;
      opacity: number;
      offset: number;

      constructor(yOffset: number, speed: number, color: string, opacity: number) {
        this.yOffset = yOffset;
        this.speed = speed;
        this.color = color;
        this.opacity = opacity;
        this.offset = 0;
      }

      draw() {
        if (!ctx || !canvas) return;

        ctx.save();
        ctx.globalAlpha = this.opacity;

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.3, this.color);
        gradient.addColorStop(0.5, this.color);
        gradient.addColorStop(0.7, this.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.filter = 'blur(30px)';

        ctx.beginPath();

        const mouseInfluence = (mouseX / canvas.width) * 60;
        const mouseVertical = (mouseY / canvas.height) * 30;

        for (let x = 0; x <= canvas.width; x += 4) {
          const distanceToMouse = Math.abs(x - mouseX);
          const mouseEffect = Math.max(0, 50 - distanceToMouse / 8);

          const y = this.yOffset + mouseVertical +
            Math.sin((x + this.offset) * 0.003) * 50 +
            Math.sin((x + this.offset) * 0.005) * 35 +
            Math.sin((x + this.offset + mouseInfluence) * 0.001) * 80 +
            (mouseEffect * 0.4);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        this.offset += this.speed;
      }
    }

    const auroras = [
      new AuroraWave(120, 0.2, 'rgba(0, 217, 163, 0.25)', 0.4),
      new AuroraWave(160, -0.15, 'rgba(0, 184, 212, 0.25)', 0.35),
      new AuroraWave(200, 0.25, 'rgba(149, 117, 205, 0.2)', 0.3),
    ];

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      auroras.forEach(aurora => aurora.draw());
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
    />
  );
}
