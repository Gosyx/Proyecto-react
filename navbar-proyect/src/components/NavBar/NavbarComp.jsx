import React, { Component } from "react";
import CartWidget from "../CartWidget";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar className="navBg" bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              Hanasitart
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/">
                  Inicio
                </Nav.Link>
                <Nav.Link as={Link} to="/categoria/Banners">
                  Banners
                </Nav.Link>
                <Nav.Link as={Link} to="/categoria/Emotes">
                  Emotes
                </Nav.Link>
                <Nav.Link as={Link} to="/categoria/Paneles">
                  Paneles
                </Nav.Link>
                <Nav.Link as={Link} to="/categoria/Stickers">
                  Stickers
                </Nav.Link>

                <Nav.Link as={Link} to="/cart">
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
                <Button variant="outline-success">🔍</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
