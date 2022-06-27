import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./grid.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { productsLikeReducer } from "./Redux/productsLikeReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(
  productsLikeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
