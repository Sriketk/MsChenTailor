import * as React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Props for the MasonryGrid component.
 * @template T - The type of the items in the grid.
 */
interface MasonryGridProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  gap?: string;
  staggerDelay?: number;
}

const MasonryGrid = <T,>({
  items,
  renderItem,
  className,
  gap = '1rem',
  staggerDelay = 0.03,
}: MasonryGridProps<T>) => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      ref={containerRef}
      className={cn('w-full', className)}
      style={{ columnGap: gap }}
      role="list"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.4,
            delay: prefersReducedMotion ? 0 : Math.min(index * staggerDelay, 0.3),
            ease: [0.4, 0, 0.2, 1],
          }}
          className="mb-4 break-inside-avoid"
          role="listitem"
        >
          {renderItem(item, index)}
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGrid;