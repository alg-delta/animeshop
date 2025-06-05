import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Header() {
  return <div>
     <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">AnimeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Головна</Nav.Link>
            <Nav.Link  href="#corzuna" >Корзина</Nav.Link>
            <Nav.Link as={NavLink} to="/Test">Тест</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </div>;
}
