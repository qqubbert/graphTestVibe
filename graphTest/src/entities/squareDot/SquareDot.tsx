export const SquareDot = (props: any) => {
  const { cx, cy } = props;

  return (
    <rect
      x={cx - 4}
      y={cy - 4}
      width={8}
      height={8}
      fill="currentColor"
    />
  );
};