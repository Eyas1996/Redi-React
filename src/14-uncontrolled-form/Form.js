export default function Form({ onSubmit }) {
  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    onSubmit(formJson);
  };
  return (
    <form className="myForm" onSubmit={handleSubmit}>
      Your form elements here
      <div>
        <label htmlFor="name">
          Name
          <input type="text" id="name" name="name" />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input type="email" id="email" name="email" />
        </label>
      </div>
      <div>
        <label htmlFor="message">
          {" "}
          Message
          <textarea type="text" name="message" id="message"></textarea>
        </label>
      </div>
      <br />
      Do not forget to use label element with input etc
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
