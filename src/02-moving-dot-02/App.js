import Dot from "./Dot";
import Canvas from "./Canvas";
import Settings from "./Settings";
import { useState } from "react";

// Task 1: Pass props into the Dot component so that
// there's small dot displayed. Make sure that:
// - It's shown on screen (small circle)
// - It's located at position x=100, y=100
// - Its color is blue

// Task 2: Import and add the Settings component underneath
// the <h1> tag so it shows at the bottom. Pass in the prop
// isOn={true} and modify the component to show a checked box.

// Task 3: Implement useState to create a set of state handlers
// color and setColor with an initial state of "red". Pass these
// appropriately to the Dot (color) and Settings (setColor)
// components to change the color of the dot.

// Task 4: Implement useState to toggle the display of the dot
// (isOn, setOn with a default of true). This time, make sure that
// the checkbox is initialized to be checked (true).

// Task 5: Implement useState to pass an object with x and y position
// from Canvas to the Dot component so that the dot moves when hovering
// over the canvas.

function App() {
  // Implement useState to create a set of state handlers color and setColor with an initial state of "red"

  const [color, setColor] = useState("red");

  // Implement useState to toggle the display of the dot (isOn, setOn with a default of true)

  const [isOn, setOn] = useState(false);

  // Implement useState to pass an object with x and y position
  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  return (
    <>
      <Canvas color="cyan" setPosition={setPosition}>
        <Dot isOn2={isOn} x={position.x} y={position.y} color={color} />
      </Canvas>
      <h1>Moving Dot</h1>
      <Settings setColor2={setColor} setOn2={setOn} />
    </>
  );
}

export default App;
