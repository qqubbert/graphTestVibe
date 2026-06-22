import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { SquareDot } from "../Dots/SquareDot/SquareDot";
import { CircleDot } from "../Dots/CircleDot/CircleDot";
import { DiamondDot } from "../Dots/DiamondDot/DiamondDot";
import { HaloDot } from "../Dots/HaloDot/HaloDot";

import { ChartTooltip } from "../ChartTooltip/ChartTooltip";

import "./MixedChart.css";

import { ChartSeriesState, ChartRow } from "../../shared/types/types";

interface Props {
  data: ChartRow[];
  series: ChartSeriesState;
}

export const MixedChart = ({ data, series }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <ComposedChart data={data}>
        <XAxis dataKey="date" hide />
        <YAxis hide />

        <Tooltip content={<ChartTooltip />} />

        <Area
          type="monotone"
          dataKey="area"

          name={series.area.name}

          fill={series.area.color}
          fillOpacity={1}
          stroke={series.area.color2}
          strokeWidth={2}

          dot={false}
          activeDot={(props) => <HaloDot {...props} shape={CircleDot} />}
        />

        <Line
          type="monotone"
          dataKey="spline"

          name={series.spline.name}

          fill={series.spline.color}
          stroke={series.spline.color2}
          strokeWidth={3}

          dot={false}
          activeDot={(props) => <HaloDot {...props} shape={DiamondDot} />}
        />

        <Line
          type="linear"
          dataKey="line"

          name={series.line.name}

          fill={series.line.color}
          stroke={series.line.color2}

          dot={<SquareDot stroke={series.line.color} />}
          activeDot={(props) => (
            <HaloDot {...props} stroke="white" shape={SquareDot} />
          )}
        />

        <Bar
          dataKey="bar"

          name={series.bar.name}

          fill={series.bar.color}
          stroke={series.bar.color2} 
          strokeWidth={2}

          radius={[8, 8, 0, 0]}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
