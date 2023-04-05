import React from "react";
import { useState } from "react";

function App() {
  const [val, setVal] = useState("");
  const [isFocused, setIsFocused] = useState();

  return (
    <div className="App">
      <h1 onClick={() => setVal("")}>Click me to clear the input</h1>
      <h2 onMouseOver={() => console.log(val)}>
        Hover me to log what is in the input to the console
      </h2>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="type something here to show in the box below"
      />

      <br />
      <br />

      <div>
        {/* when the input is focused a message should be rendered : "user typing ..." */}
        {isFocused ? "user typing ..." : null}
      </div>

      <div>
        {/* the input value should show here 
            if the input is empty show a message :"nothig to show!"
        */}
        {val ? val : "nothig to show!"}
      </div>
    </div>
  );
}
export default App;
