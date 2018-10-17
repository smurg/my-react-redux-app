import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap’s ready-to-use css
import "bootstrap"; //Import Bootstrap’s JavaScript by adding this line
import configureStore from "./store/configureStore";
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";
/* This is the file with our application entry point */

const store = configureStore(); // once the store is configured we can then dispatch actions in the store.
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
