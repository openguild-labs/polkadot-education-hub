'use client';

import type React from 'react';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
}

export default function Spotlight({ children, className = '' }: SpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [size, setSize] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    // Calculate relative position within the container
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    setPosition({ x, y });
    setOpacity(0.15); // Show the spotlight

    // Adjust size based on container dimensions
    const maxSize = Math.max(containerRect.width, containerRect.height) * 1.5;
    setSize(maxSize);
  };

  const handleMouseLeave = () => {
    setOpacity(0); // Hide the spotlight
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      setOpacity(0);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 transition duration-300"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 107, 145, ${opacity}) 0%, transparent 60%)`,
          width: `${size}px`,
          height: `${size}px`,
          left: position.x - size / 2,
          top: position.y - size / 2,
        }}
      />
      {children}
    </motion.div>
  );
}
