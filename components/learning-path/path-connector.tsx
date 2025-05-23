'use client';

import { motion } from 'framer-motion';

interface Position {
  x: number;
  y: number;
}

interface PathConnectorProps {
  from: Position;
  to: Position;
  isHighlighted: boolean;
}

export default function PathConnector({ from, to, isHighlighted }: PathConnectorProps) {
  // Calculate path
  const startX = from.x + 100; // Center of the from node (assuming width is 200)
  const startY = from.y + 40; // Bottom of the from node
  const endX = to.x + 100; // Center of the to node
  const endY = to.y; // Top of the to node

  // Calculate control points for the curve
  const midY = (startY + endY) / 2;
  const controlPoint1 = { x: startX, y: midY };
  const controlPoint2 = { x: endX, y: midY };

  // Create SVG path
  const path = `M ${startX} ${startY} C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${endX} ${endY}`;

  return (
    <svg
      className="absolute left-0 top-0 h-full w-full overflow-visible"
      style={{ pointerEvents: 'none' }}
    >
      <motion.path
        d={path}
        fill="none"
        strokeWidth={isHighlighted ? 2 : 1}
        stroke={isHighlighted ? '#ec4899' : '#9ca3af'}
        strokeDasharray={isHighlighted ? '0' : '5,5'}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      {isHighlighted && (
        <motion.circle
          cx={endX}
          cy={endY}
          r={4}
          fill="#ec4899"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </svg>
  );
}
