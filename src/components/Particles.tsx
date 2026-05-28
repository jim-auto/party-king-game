import { motion } from 'framer-motion';

const colors = ['#ff3ad6', '#24d9ff', '#ffd35a', '#7dff8a', '#ff6b4a'];

export function Particles({ burstKey }: { burstKey: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 34 }).map((_, index) => {
        const angle = (index / 34) * Math.PI * 2;
        const distance = 120 + (index % 5) * 22;
        return (
          <motion.span
            key={`${burstKey}-${index}`}
            className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full"
            style={{ backgroundColor: colors[index % colors.length], boxShadow: `0 0 18px ${colors[index % colors.length]}` }}
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              scale: [0, 1.25, 0.2],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        );
      })}
    </div>
  );
}
