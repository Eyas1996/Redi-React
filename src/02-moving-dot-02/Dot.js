import React from 'react';

function Dot({ x, y, color, isOn2 }) {
  return (
    <div
      style={{
        position: "absolute",
        overflow: "hidden",
        backgroundColor: color,
        display: isOn2 ? "block" : "none",
        borderRadius: "50%",
        transform: `translate(${x}px, ${y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20
      }}
    />
  );
}

export default Dot;
