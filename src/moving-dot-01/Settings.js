import React from "react";

function Settings() {
  const isOn = false;
  return (
    <>
      <label htmlFor="on">On/off </label>
      <input type="checkbox" id="on" checked={isOn} />
      <p>
        <button value="red">Red</button>
        <button value="blue">Blue</button>
        <button value="green">Green</button>
      </p>
    </>
  );
}

export default Settings;
