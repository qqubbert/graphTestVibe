import { MixedChart } from "../../entities/chart/MixedChart";

import { useState } from "react";
import { data as testData } from '../../shared/data/testData'

import SeriesEditor from "../../widgets/SeriesEditor/SeriesEditor";
import ChartEditor from "../../widgets/ChartEditor/ChartEditor";

import "./Dashboard.css"

import { ChartSeriesState, ChartRow } from "../../shared/types/types";

function Dashboard() {
  const [data, setData] = useState<ChartRow[]>([...testData]);

  const [series, setSeries] = useState<ChartSeriesState>({
    area: { name: "Cost", color: "#fff0bf", color2: "#fff198" },
    spline: { name: "ROI confirmed", color: "#0b8400", color2: "#0b8400" },
    line: { name: "Conversions", color: "#b401fd", color2: "#b401fd" },
    bar: { name: "CPA", color: "#3770ff", color2: "#ffffff" },
  });

  return (
    <div className="page-dashboard">
      <MixedChart data={data} series={series} />
      <ChartEditor data={data} setData={setData} />
      <SeriesEditor series={series} setSeries={setSeries} />
    </div>
  );
}

export default Dashboard;