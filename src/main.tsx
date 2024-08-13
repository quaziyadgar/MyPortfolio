import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="my_portfolio/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
