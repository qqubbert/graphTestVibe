import { motion } from "framer-motion";

type DotProps = {
  cx?: number;
  cy?: number;
  fill?: string;
  stroke?: string;
};

export const SquareDot = ({ cx, cy, fill, stroke = "none" }: DotProps) => {
  const size = 8;

  return (
    <motion.rect
      key={`square-${cx}-${cy}`}
      x={(cx ?? 0) - size / 2}
      y={(cy ?? 0) - size / 2}
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      strokeWidth={2}
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        transformOrigin: `${cx}px ${cy}px`,
      }}
    />
  );
};

