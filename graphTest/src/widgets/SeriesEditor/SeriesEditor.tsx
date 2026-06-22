import { ChartSeriesState, SeriesKey } from "../../shared/types/types";
import "./SeriesEditor.css";

const SERIES_KEYS: SeriesKey[] = ["area", "spline", "line", "bar"];

function SeriesEditor({
  series,
  setSeries,
}: {
  series: ChartSeriesState;
  setSeries: React.Dispatch<React.SetStateAction<ChartSeriesState>>;
}) {
  return (
    <div className="series-editor">
      {SERIES_KEYS.map((key) => {
        const value = series[key];

        return (
          <div key={key} className="series-editor__row">
            <div className="field">
              <label>Key</label>
              <span className="series-key">{key}</span>
            </div>

            <div className="field">
              <label>Name</label>
              <input
                value={value.name}
                onChange={(e) =>
                  setSeries((prev) => ({
                    ...prev,
                    [key]: { ...prev[key], name: e.target.value },
                  }))
                }
              />
            </div>

            <div className="field">
              <label>Color</label>
              <input
                type="color"
                value={value.color}
                onChange={(e) =>
                  setSeries((prev) => ({
                    ...prev,
                    [key]: { ...prev[key], color: e.target.value },
                  }))
                }
              />
            </div>

            <div className="field">
              <label>Color 2</label>
              <input
                type="color"
                value={value.color2}
                onChange={(e) =>
                  setSeries((prev) => ({
                    ...prev,
                    [key]: { ...prev[key], color2: e.target.value },
                  }))
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SeriesEditor;