"use client";

import { useEffect, useRef } from "react";

const glyphs = "01<>/{}[]+-=*&";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let drops: number[] = [];
    let animationFrame = 0;
    let previousFrame = 0;
    const fontSize = 16;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      drops = Array.from({ length: Math.ceil(width / fontSize) }, () => Math.random() * -28);
      context.clearRect(0, 0, width, height);
    };

    const drawFrame = (time: number) => {
      if (time - previousFrame < 70) {
        animationFrame = window.requestAnimationFrame(drawFrame);
        return;
      }
      previousFrame = time;
      context.fillStyle = "rgba(5, 12, 7, 0.17)";
      context.fillRect(0, 0, width, height);
      context.font = `${fontSize}px monospace`;

      drops.forEach((drop, column) => {
        const character = glyphs[Math.floor(Math.random() * glyphs.length)];
        context.fillStyle = drop < 1 ? "rgba(213, 255, 211, 0.9)" : "rgba(114, 213, 135, 0.55)";
        context.fillText(character, column * fontSize, drop * fontSize);
        if (drop * fontSize > height && Math.random() > 0.977) {
          drops[column] = 0;
        } else {
          drops[column] += 0.35 + Math.random() * 0.55;
        }
      });

      if (!reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(drawFrame);
      }
    };

    resizeCanvas();
    animationFrame = window.requestAnimationFrame(drawFrame);
    window.addEventListener("resize", resizeCanvas);
    const handleMotionPreference = () => {
      window.cancelAnimationFrame(animationFrame);
      previousFrame = 0;
      animationFrame = window.requestAnimationFrame(drawFrame);
    };
    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      reducedMotion.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />;
}