import React, { Component } from "react";
import CartWidget from "../CartWidget";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Hanasiart</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="./pages/Inicio.js">Inicio</Nav.Link>
                <Nav.Link href="./pages/Emotes.js">Emotes</Nav.Link>
                <Nav.Link href="./pages/Paneles.js">Paneles</Nav.Link>
                <NavDropdown title="Contactos" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="./pages/Contacto.js">
                    Contacto
                  </NavDropdown.Item>
                  <NavDropdown.Item href="./pages/Informacion.js">
                    Informacion
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">
                  <CartWidget />
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="Buscar"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Buscar"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
