"use client";
import { useEffect, useRef, useState } from "react";

interface AnimatedWaveProps {
  audioUrl: string;
  className?: string;
}

class Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;

  constructor(
    x: number,
    y: number,
    size: number,
    color: string,
    speedX: number,
    speedY: number
  ) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update(decay: number) {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= decay;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.globalAlpha = 1;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

const AnimatedWave: React.FC<AnimatedWaveProps> = ({ audioUrl, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const decay = 0.98;
    const colors = ["#FF6B6B", "#FFE66D", "#4472CA", "#4ECDC4", "#C44DFF"];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 2; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 10 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const speedX = (Math.random() - 0.5) * 4;
        const speedY = (Math.random() - 0.5) * 4;
        particles.current.push(new Particle(x, y, size, color, speedX, speedY));
      }

      particles.current.forEach((particle, index) => {
        particle.update(decay);
        particle.draw(ctx);
        if (particle.size < 0.5) {
          particles.current.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch((e) => console.error("Audio play failed", e));
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={`relative ${className ?? ""}`}>
      <canvas ref={canvasRef} className="w-full h-[300px] bg-transparent" />
      <audio ref={audioRef} src={audioUrl} />
      <button
        onClick={toggleAudio}
        className="absolute bottom-2 left-2 bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition"
      >
        {isPlaying ? "Pause" : "Play"} Music
      </button>
    </div>
  );
};

export default AnimatedWave;
