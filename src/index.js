import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./moving-dot-01/App";
// import App from "./moving-dot-02/App";
// import App from "./moving-dot-final/App";
// import App from "./list-keys/App"
import App from './event-handlers/App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
