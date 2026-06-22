import { useState } from "react";
import { ChartRow } from "../../shared/types/types";
import "./ChartEditor.css";

function ChartEditor({
  data,
  setData,
}: {
  data: ChartRow[];
  setData: React.Dispatch<React.SetStateAction<ChartRow[]>>;
}) {
  const updateRow = (index: number, key: keyof ChartRow, value: any) => {
    setData((prev) =>
      prev.map((row, i) =>
        i === index ? { ...row, [key]: value } : row
      )
    );
  };

  const deleteRow = (index: number) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };

  const addRow = () => {
    setData((prev) => [
      ...prev,
      {
        date: "",
        area: 0,
        spline: 0,
        line: 0,
        bar: 0,
      },
    ]);
  };

  return (
    <div className="chart-editor">
      <div className="chart-editor__table">
        {data.map((row, index) => (
          <div key={index} className="chart-editor__row">
            <div className="field">
              <label>Date</label>
              <input
                type="date"
                value={row.date}
                onChange={(e) =>
                  updateRow(index, "date", e.target.value)
                }
              />
            </div>

            <div className="field">
              <label>Area</label>
              <input
                type="number"
                value={row.area}
                onChange={(e) =>
                  updateRow(index, "area", +e.target.value)
                }
              />
            </div>

            <div className="field">
              <label>Spline</label>
              <input
                type="number"
                value={row.spline}
                onChange={(e) =>
                  updateRow(index, "spline", +e.target.value)
                }
              />
            </div>

            <div className="field">
              <label>Line</label>
              <input
                type="number"
                value={row.line}
                onChange={(e) =>
                  updateRow(index, "line", +e.target.value)
                }
              />
            </div>

            <div className="field">
              <label>Bar</label>
              <input
                type="number"
                value={row.bar}
                onChange={(e) =>
                  updateRow(index, "bar", +e.target.value)
                }
              />
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteRow(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button className="add-btn" onClick={addRow}>
        Add row
      </button>
    </div>
  );
}

export default ChartEditor;