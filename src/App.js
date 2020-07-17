import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Brand as={Link} to="/">
          BLD
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav pullRight>
            <Nav.Link as={Link} to="/sandbox">
              sandbox
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
