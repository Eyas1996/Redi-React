import React from "react";

export default function App() {
  const [focus, setFocus] = React.useState();
  const [blur, setBlur] = React.useState();

  return (
    <div className="App">
      <h1>Click me to clear the input</h1>
      <h2>Hover me to log what is in the input to the console</h2>
      <input
        onFocus={(e) => {
          setFocus(e.target);
        }}
        onBlur={(e) => {
          setFocus(null);
          setBlur(e.target.value);
        }}
        placeholder="type something here to show in the box below"
      />

      <br />
      <br />

      <div>
        {/* when the input is focused a message should be rendered : "user typing ..." */}
        {focus && "user typing ..."}
      </div>

      <div>
        {/* the input value should show here 
            if the input is empty show a message :"nothig to show!"
        */}
        {/* {blur && blur ||"nothig to show!" } */}

        {(blur && blur) || "nothig to show!"}
      </div>
    </div>
  );
}
