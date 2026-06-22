export const ChartTooltip = ({ active, payload, label }: Props) => {
  if (!active || !payload?.length) return null;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        padding: "12px",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        fontSize: 13,
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <div style={{ fontWeight: 200 }}>
        {label}
      </div>

      {payload.map((item) => {
        const color = item.color || item.stroke || item.fill;

        return (
          <div
            key={item.dataKey}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              alignItems: "center",
              fontWeight: 500,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  width: 14,
                  height: 14,
                  background: color,
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              />
              <span>{item.name}:</span>
            </div>

            <span style={{
              fontWeight: 800
            }}>{item.value}</span>
          </div>
        );
      })}
    </div>
  );
};