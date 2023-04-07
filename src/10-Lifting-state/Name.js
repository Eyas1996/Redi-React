import React from "react";

const Name = () => {
  const [name, setName] = React.useState("");
  return (
    <div>
      <label htmlFor="nameInput">Name: </label>
      <input
        id="nameInput"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
};

export default Name;
