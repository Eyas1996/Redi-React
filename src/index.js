import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./01-moving-dot-01/App";
// import App from "./02-moving-dot-02/App";
// import App from "./03-moving-dot-final/App";
// import App from './04-Conditional-rendering/App';
// import App from "./05-list-keys/App"
import App from "./06-event-handlers/App"
// import App from './07-Portfolio-skills-list/App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
