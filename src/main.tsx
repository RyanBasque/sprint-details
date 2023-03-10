import React from "react";
import { createRoot } from "react-dom/client";

import AppRoutes from "./routes";

import { GlobalStyle } from "./assets/css-global";
import "rsuite/dist/rsuite.min.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>
);
