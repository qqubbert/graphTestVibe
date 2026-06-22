export interface ChartPoint {
  date: string;
  area: number;
  spline: number;
  line: number;
  bar: number;
}

export type SeriesKey = "area" | "spline" | "line" | "bar";

export type SeriesConfig = {
  name: string;
  color: string;
  color2?: string;
};

export type ChartSeriesState = Record<SeriesKey, SeriesConfig>;

export type ChartRow = {
  date: string;
} & Record<SeriesKey, number>;

export type ChartTooltipItem = {
  name?: string;
  value?: number | string;
  dataKey?: string;
  color?: string;
  stroke?: string;
  fill?: string;
};