import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import Home from "./pages/home";
import Db from "./pages/db";
import Tasks from "./pages/tasks";
import Login from "./pages/login";
import OAuth2RedirectHandler from "./user/oauth2/OAuth2RedirectHandler";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <p>Temp navbar</p>
        <Link to="/">home</Link>
        <br />
        <Link to="/login">login</Link>
        <br />
        <Link to="/tasks">tasks</Link>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/db" element={<Db />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
