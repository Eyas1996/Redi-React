import React from "react";

function Canvas({ setPosition = () => {}, children, color }) {
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
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
