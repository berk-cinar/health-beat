import React from 'react'
import { Outlet } from 'react-router-dom';
import {Navbar, Nav, Container} from "react-bootstrap"

function Header() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="home"> HealthBeat </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="health"> HEALTH </Nav.Link>
      <Nav.Link href="science"> SCIENCE MCIENCE </Nav.Link>
      <Nav.Link href="grants-and-trainings"> GRNATS AND TRAININGS </Nav.Link>
      <Nav.Link href="news-and-events"> NEWS AND EVENTS </Nav.Link>
      <Nav.Link href="about-healthbeat"> About HealthBeat </Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    <main>
      <Outlet />
    </main>

    </div>
  )
}

export default Header