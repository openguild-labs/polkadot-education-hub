'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, type Variant } from 'framer-motion';

interface RevealAnimationProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
}

export default function RevealAnimation({
  children,
  width = 'fit-content',
  delay = 0,
  duration = 0.5,
  direction = 'up',
  threshold = 0.3,
}: RevealAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  // Direction-based variants
  const getVariants = () => {
    const variants = {
      hidden: {} as Variant,
      visible: {} as Variant,
    };

    switch (direction) {
      case 'up':
        variants.hidden = { opacity: 0, y: 50 };
        variants.visible = { opacity: 1, y: 0 };
        break;
      case 'down':
        variants.hidden = { opacity: 0, y: -50 };
        variants.visible = { opacity: 1, y: 0 };
        break;
      case 'left':
        variants.hidden = { opacity: 0, x: 50 };
        variants.visible = { opacity: 1, x: 0 };
        break;
      case 'right':
        variants.hidden = { opacity: 0, x: -50 };
        variants.visible = { opacity: 1, x: 0 };
        break;
      default:
        variants.hidden = { opacity: 0, y: 50 };
        variants.visible = { opacity: 1, y: 0 };
    }

    return variants;
  };

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          controls.start('visible');
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, isVisible, threshold]);

  return (
    <div ref={ref} style={{ width }} className="overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={getVariants()}
        transition={{ duration, ease: 'easeOut', delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
