import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { SquareDot } from "../../squareDot/SquareDot";

import "./MixedChart.css"

interface Props {
  data: {
    date: string;
    area: number;
    spline: number;
    line: number;
    bar: number;
  }[];
}

export const MixedChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="75%" height={500}>
      <ComposedChart data={data}>
        {/* <CartesianGrid
          stroke="#d4c7c8"
          strokeWidth={2}
        /> */}

        <XAxis dataKey="date" hide />
        <YAxis hide />

        <Tooltip
          content={({ active, payload, label }) => {
            if (!active || !payload?.length) return null;

            return (
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #ddd",
                  padding: "12px",
                }}
              >
                <div>
                  <strong>{label}</strong>
                </div>

                {payload.map((item) => (
                  <div key={item.dataKey}>
                    {item.name}: {item.value}
                  </div>
                ))}
              </div>
            );
          }}
        />

        {/* <Legend /> */}

        <Area
          type="monotone"
          dataKey="area"
          name="Area"
          fill="#fff0bf"
          stroke="none"
          fillOpacity={1}
        />

        <Line
          type="monotone"
          dataKey="spline"
          name="Spline"
          stroke="#0b8400"
          strokeWidth={3}
          dot={false}
        />

        <Line
          type="linear"
          dataKey="line"
          name="Line"
          stroke="#b401fd"
          strokeWidth={3}
          dot={<SquareDot />}
        />

        <Bar
          dataKey="bar"
          name="Bar"
          fill="#3770ff"
          radius={[8, 8, 0, 0]}
          stroke="#ffffff"
          strokeWidth={2}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
