import { useState } from "react";

export default function App() {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  const handleMouseOver = (e) => {
    setPointerPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div className="App" onMouseMove={handleMouseOver}>
      <h1>Mouse cursor</h1>
      <h2>
        Current pointer position is X: {pointerPosition.x} y:{" "}
        {pointerPosition.y}
      </h2>
    </div>
  );
}
