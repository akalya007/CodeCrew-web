import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import './index.css' // This should contain @tailwind directives


createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
