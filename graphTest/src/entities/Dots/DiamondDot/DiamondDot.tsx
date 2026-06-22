import { motion, AnimatePresence } from "framer-motion";

export const DiamondDot = (props: any) => {
  const { cx, cy, fill, stroke } = props;

  const size = 5;

  const points = [
    `${cx},${cy - size}`,
    `${cx + size},${cy}`,
    `${cx},${cy + size}`,
    `${cx - size},${cy}`,
  ].join(" ");

  return (
    <motion.polygon
      key={`diamond-${cx}-${cy}`}
      points={points}
      fill={fill}
      stroke={stroke}
      strokeWidth={2}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      style={{
        transformOrigin: `${cx}px ${cy}px`,
      }}
    />
  );
};
