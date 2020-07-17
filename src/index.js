import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Amplify } from "aws-amplify";

Amplify.configure({
  // Add s3 buckets or lambdas here when needed
});

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <App />
  </Router>,
  // </React.StrictMode>
  document.getElementById("root")
);
