import React from "react";

function Settings({ setColor2, isOn2, setOn2 }) {
  const onClick = (e) => setColor2(e.target.value);
  const onChange = function (e) {
    setOn2(e.target.checked);
    console.log(e.target.checked);
  };

  return (
    <>
      <label htmlFor="on">On/off </label>
      <input onChange={onChange} type="checkbox" id="on" checked={isOn2} />
      <p>
        <button onClick={onClick} value="red">
          Red
        </button>
        <button onClick={onClick} value="blue">
          Blue
        </button>
        <button onClick={onClick} value="green">
          Green
        </button>
      </p>
    </>
  );
}

export default Settings;
