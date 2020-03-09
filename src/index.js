import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux"; //allow acces to store
import { BrowserRouter as Router } from "react-router-dom"; //routes for pages
// const FontAwesome = require('react-fontawesome');
import store from "./store";
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/food_delivery/">
      <div className="container">
        <App />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

