import React from "react";

function Canvas({ children, color }) {
  return (
    <div
      style={{
        position: "relative",
        background: color,
        width: "100vw",
        height: "10rem",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

export default Canvas;
