import React from "react";
import { Nav, Navbar, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo192.png";

const NavbarCustom = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          {props.title}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/profile">profile</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
export default NavbarCustom;
