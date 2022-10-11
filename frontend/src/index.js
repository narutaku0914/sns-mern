import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./state/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
