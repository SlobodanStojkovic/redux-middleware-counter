import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { counterReducer } from "./reducer";
import { Provider } from "react-redux";
import { capAtTen, myLogger, secondMiddleware } from "./middleware";
import logger from "redux-logger";  //third party logger npm i redux-logger which shows us details about redux actions

const store = createStore(
  counterReducer,
  applyMiddleware(myLogger, secondMiddleware, capAtTen, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
