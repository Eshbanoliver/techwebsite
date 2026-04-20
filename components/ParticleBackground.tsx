'use client';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  reset(): void;
  update(): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

export default function ParticleBackground(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;
    const particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };
    
    // Theme state
    let isLight = document.documentElement.getAttribute('data-theme') === 'light';

    const resize = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent): void => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouse);

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          isLight = document.documentElement.getAttribute('data-theme') === 'light';
          // Optional: Refresh particle colors
          particles.forEach(p => p.reset());
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    function createParticle(): Particle {
      const p: Particle = {
        x: 0,
        y: 0,
        size: 0,
        speedX: 0,
        speedY: 0,
        opacity: 0,
        color: '',
        reset() {
          this.x = Math.random() * canvas!.width;
          this.y = Math.random() * canvas!.height;
          this.size = Math.random() * 2 + 0.5;
          this.speedX = (Math.random() - 0.5) * 0.4;
          this.speedY = (Math.random() - 0.5) * 0.4;
          
          if (isLight) {
            this.color = Math.random() > 0.5 ? '255, 138, 0' : '255, 92, 0';
            this.opacity = Math.random() * 0.3 + 0.1;
          } else {
            this.color = Math.random() > 0.5 ? '255, 138, 0' : '255, 61, 0';
            this.opacity = Math.random() * 0.5 + 0.1;
          }
        },
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
          if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;
        },
        draw(c: CanvasRenderingContext2D) {
          c.beginPath();
          c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          c.fillStyle = `rgba(${this.color}, ${this.opacity})`;
          c.fill();
        },
      };
      p.reset();
      return p;
    }

    const getParticleCount = (): number => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const baseArea = 1920 * 1080;
      const currentArea = w * h;
      // More aggressive reduction for mobile (below 768px)
      const ratio = w < 768 ? 0.3 : 1;
      return Math.min(Math.floor((currentArea / 12000) * ratio), w < 768 ? 40 : 100);
    };

    const count = getParticleCount();
    for (let i = 0; i < count; i++) {
      particles.push(createParticle());
    }

    const drawConnections = (): void => {
      const connectionColor = isLight ? '255, 138, 0' : '255, 138, 0';
      const maxOpacity = isLight ? 0.08 : 0.15;
      const maxDist = 150;
      const maxDistSq = maxDist * maxDist;
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          
          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const opacity = (1 - dist / maxDist) * maxOpacity;
            ctx!.beginPath();
            ctx!.moveTo(p1.x, p1.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.strokeStyle = `rgba(${connectionColor}, ${opacity})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }
    };

    const animate = (): void => {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx!);
      });
      drawConnections();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
