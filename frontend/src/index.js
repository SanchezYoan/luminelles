import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import store from "./app/store";
import { UserContextProvider } from "./context/userContext";
import { PseudoProvider } from "./context/pseudoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <PseudoProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PseudoProvider>
  </UserContextProvider>
);
