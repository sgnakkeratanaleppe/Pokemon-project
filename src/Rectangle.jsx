const Rectangle = ({ color, value, label, maxValue }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, margin: 4 }}>
      <span style={{ width: 60 }}>{label}</span>
      <div
        style={{
          position: "relative",
          flex: 1,
          minWidth: 0,
          height: 22,
          borderRadius: 16,
          backgroundColor: "#c4c7ab",
        }}
      >
        <div
          style={{
            width: `${(value / maxValue) * 100}%`,
            height: "100%",
            backgroundColor: color,
            borderRadius: 16,
          }}
        />
        <span
          style={{
            position: "absolute",
            left: `${(value / maxValue) * 100}%`,
            top: "50%",
            transform: "translate(6px,-50%)",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
};

export default Rectangle;