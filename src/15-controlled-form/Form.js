import { useState } from "react";

export default function Form({ setFormData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleChange1(e) {
    setName(e.target.value);
  }
  function handleChange2(e) {
    setEmail(e.target.value);
  }
  function handleChange3(e) {
    setMsg(e.target.value);
  }

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setFormData(formJson);
    console.log(name);
    console.log(email);
    console.log(msg);
  };
  return (
    <form className="myForm" onSubmit={handleSubmit}>
      Your form elements here
      <div>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange1}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange2}
          />
        </label>
      </div>
      <div>
        <label htmlFor="message">
          {" "}
          Message
          <textarea
            type="text"
            name="message"
            id="message"
            value={msg}
            onChange={handleChange3}
          ></textarea>
        </label>
      </div>
      <br />
      Do not forget to use label element with input etc
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
