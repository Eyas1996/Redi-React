import Dot from "./Dot";
import Canvas from "./Canvas";
import Settings from "./Settings"

// Task 1: Pass props into the Dot component so that
// there's small dot displayed. Make sure that:
// - It's shown on screen (small circle)
// - It's located at position x=100, y=100
// - Its color is blue

// Task 2: Import and add the Settings component underneath
// the <h1> tag so it shows at the bottom. Pass in the prop
// isOn={true} and modify the component to show a checked box.

function App() {
  return (
    <>
      <Canvas color="cyan">
        <Dot isOn={true} x={100} y={100} color="blue" />
      </Canvas>
      <h1>Moving Dot</h1>
      <Settings />
    </>
  );
}

export default App;
