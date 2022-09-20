import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PageWrapper from "./store/Page";
import ThemeWrapper from "./store/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageWrapper>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </PageWrapper>
  </React.StrictMode>
);
