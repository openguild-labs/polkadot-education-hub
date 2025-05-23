'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Create floating elements
    const newElements: FloatingElement[] = [];
    const colors = ['#FF6B9180', '#C840E980', '#FF41A480', '#9340FF80'];

    for (let i = 0; i < 20; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100, // initial x position (%)
        y: Math.random() * 100, // initial y position (%)
        size: Math.random() * 80 + 20, // size between 20px and 100px
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 20, // animation duration between 20s and 40s
        delay: Math.random() * 5, // delay between 0s and 5s
      });
    }
    setElements(newElements);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {elements.map(element => (
        <motion.div
          key={element.id}
          className="absolute rounded-full blur-3xl"
          initial={{
            x: `${element.x}%`,
            y: `${element.y}%`,
            opacity: 0.2,
          }}
          animate={{
            x: [
              `${element.x}%`,
              `${(element.x + 20) % 100}%`,
              `${(element.x - 10) % 100}%`,
              `${element.x}%`,
            ],
            y: [
              `${element.y}%`,
              `${(element.y - 20) % 100}%`,
              `${(element.y + 15) % 100}%`,
              `${element.y}%`,
            ],
            opacity: [0.2, 0.3, 0.2, 0.3, 0.2],
          }}
          transition={{
            duration: element.duration,
            ease: 'easeInOut',
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
          }}
          style={{
            width: element.size,
            height: element.size,
            backgroundColor: element.color,
          }}
        />
      ))}
    </div>
  );
}
