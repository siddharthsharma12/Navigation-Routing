import React from 'react';
import {Navbar,Nav,NavDropdown,Container} from "react-bootstrap"
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
   <>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      <Nav.Link><NavLink  to="/">Home</NavLink></Nav.Link>
        <NavDropdown title="PAGES" id="navbarScrollingDropdown"> 
          <Nav.Link><NavLink  to = "Page2">page2</NavLink> </Nav.Link>
          <Nav.Link><NavLink to= "Page3">Page3</NavLink></Nav.Link> 
          <Nav.Link><NavLink to= "Page4">Page4</NavLink></Nav.Link>
        </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> 
 </>
  )
}

export default Navigation;