import React from 'react'

const Sceleton = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{
        height: "300px",
        background: "#333",
        marginBottom: "20px",
        borderRadius: "10px"
      }} />

      <div style={{ display: "flex", gap: "10px" }}>
        {Array(6).fill(0).map((_, i) => (
          <div key={i} style={{
            width: "150px",
            height: "200px",
            background: "#444",
            borderRadius: "8px"
          }} />
        ))}
      </div>
    </div>
  );
};

export default Sceleton
