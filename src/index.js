import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./data";
import { Provider } from "react-redux";
import "./main.scss";
import ModalsProvider from "./components/ModalsProvider";
import RoutesProvider from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutesProvider />
      <ModalsProvider />
    </Provider>
  </React.StrictMode>
);
