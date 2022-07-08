import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Router } from "./app/routes";
import { Toasts } from "./_shared/ui/components/toast/Toast";

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toasts />
      <Router />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
