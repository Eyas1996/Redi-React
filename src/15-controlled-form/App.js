import "./styles.css";
import { useState } from "react";
import Form from "./Form";

export default function App() {
  const [formsData, setFormData] = useState({});

  return (
    <div className="App">
      <h1>Controlled Form</h1>
      <Form setFormData={setFormData} />
      <div>{JSON.stringify(formsData, null, 2)}</div>
    </div>
  );
}
