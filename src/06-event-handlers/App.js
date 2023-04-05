import React from "react";

export default function App() {
  const [focus, setFocus] = React.useState();
  const [blur, setBlur] = React.useState();
  const [msg, setMsg] = React.useState();
  const [hover, setHover] = React.useState();

  const onFocus = (e) => {
    setFocus(e.target);
  };

  const onBlur = (e) => {
    setFocus(null);
    setBlur(e.target.value);
  };

  const onClick = () => {
    setMsg("");
    setBlur("");
  };

  return (
    <div className="App">
      <h1 onClick={onClick}>Click me to clear the input</h1>
      <h2
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Hover me to log what is in the input to the console
      </h2>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        value={msg}
        placeholder="type something here to show in the box below"
      />
      {setHover && console.log(hover)}
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
