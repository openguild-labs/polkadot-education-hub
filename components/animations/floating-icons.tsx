'use client';

import { motion } from 'framer-motion';
import {
  Blocks,
  Server,
  Code,
  Lock,
  Database,
  Globe,
  Link,
  Shield,
  Layers,
  CircuitBoard,
} from 'lucide-react';

export default function FloatingIcons() {
  const icons = [
    { Component: Blocks, top: '10%', left: '5%', size: 20, duration: 8 },
    { Component: Server, top: '20%', right: '10%', size: 24, duration: 6 },
    { Component: Code, top: '70%', left: '15%', size: 22, duration: 7 },
    { Component: Lock, top: '80%', right: '15%', size: 18, duration: 9 },
    { Component: Database, top: '40%', left: '8%', size: 24, duration: 7.5 },
    { Component: Globe, top: '30%', right: '5%', size: 22, duration: 8.2 },
    { Component: Link, top: '60%', right: '10%', size: 20, duration: 6.8 },
    { Component: Shield, top: '85%', left: '48%', size: 18, duration: 7.3 },
    { Component: Layers, top: '15%', left: '45%', size: 24, duration: 8.8 },
    { Component: CircuitBoard, top: '50%', right: '3%', size: 22, duration: 7.7 },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-pink-500/30 dark:text-pink-500/20"
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
          }}
          animate={{
            y: [0, 15, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: icon.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        >
          <icon.Component size={icon.size} />
        </motion.div>
      ))}
    </div>
  );
}
