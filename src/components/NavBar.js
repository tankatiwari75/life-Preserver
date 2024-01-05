import React from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap';

import logo from '../static/images/LifePreserver.png'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NavBar() {
  return (
    <Navbar style={{fontSize:16}} bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#home" className="me-auto">
            <img
              alt=""
              src={logo}
              width="120"
              height="70"
              style={{
                marginLeft:20,

              }}
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav style={{paddingRight:'8%'}}>
            <Nav.Link href="#features">About us </Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="/contactus">Contact US</Nav.Link>
            <Nav.Link href="#pricing">Toronto FC </Nav.Link>
            <Nav.Link href="#pricing">Contact US</Nav.Link>
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
