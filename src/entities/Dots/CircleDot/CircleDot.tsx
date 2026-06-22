import { motion } from "framer-motion";

type Props = {
  cx?: number;
  cy?: number;
  fill?: string;
  stroke?: string;
  active?: boolean;
  r?: number;
};

export const CircleDot = ({
  cx,
  cy,
  fill,
  stroke = "white",
  active = false,
  r = 4,
}: Props) => {
  const size = active ? r * 1.5 : r;

  return (
    <motion.circle
      key={`circle-${cx}-${cy}`}
      cx={cx}
      cy={cy}
      r={size}
      fill={fill}
      stroke={stroke}
      initial={{
        opacity: 0,
        scale: active ? 0.6 : 0.5,
      }}
      animate={{
        opacity: 1,
        scale: active ? 1.2 : 1,
      }}
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