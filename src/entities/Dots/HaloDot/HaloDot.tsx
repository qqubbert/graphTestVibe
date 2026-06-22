import { motion } from "framer-motion";
import { CircleDot } from "../CircleDot/CircleDot";

type Props = {
  cx?: number;
  cy?: number;
  fill?: string;
  stroke?: string;
  shape?: React.ComponentType<any>;
  active?: boolean;
};

export const HaloDot = (props: Props) => {
  const {
    cx,
    cy,
    fill,
    stroke,
    shape: CustomShape,
  } = props;

  const color = fill || stroke || "#000";

  return (
    <>
      <motion.circle
        // key={`halo-${cx}-${cy}`}
        cx={cx}
        cy={cy}
        r={22}
        fill={color}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        style={{
          transformOrigin: `${cx}px ${cy}px`,
        }}
      />

      {CustomShape ? (
        <CustomShape {...props} />
      ) : (
        <CircleDot {...props} />
      )}
    </>
  );
};