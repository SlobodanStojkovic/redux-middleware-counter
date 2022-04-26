import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { counterReducer } from "./reducer";
import { Provider } from "react-redux";
import { capAtTen, myLogger, secondMiddleware } from "./middleware";

const store = createStore(
  counterReducer,
  applyMiddleware(myLogger, secondMiddleware, capAtTen)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
