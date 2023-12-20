import React from 'react';
import { Navbar, Container, Nav, Button, Image } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark text-light">
      <Container>
        <Navbar.Brand>
<div className="col-lg-2">
          <Image src={logo} alt="" /></div>
        </Navbar.Brand>
        <div className="col-lg-10">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-5">
            <Nav.Link style={{ fontSize: '21px', fontFamily: 'inter' }} className='mx-4 fw-bold text-light' >Web3makr</Nav.Link>
            <Nav.Link style={{ fontSize: '21px', fontFamily: 'inter' }} className='mx-4 fw-bold text-light'>White paper</Nav.Link>
            <Nav.Link style={{ fontSize: '21px', fontFamily: 'inter' }} className='mx-4 fw-bold text-light'> Services</Nav.Link>
            <Nav.Link style={{ fontSize: '21px', fontFamily: 'inter' }} className='mx-4 fw-bold text-light'> Tool</Nav.Link>
            <Nav.Link style={{ fontSize: '21px', fontFamily: 'inter' }} className='fw-bold text-light'> Contact Us</Nav.Link>
            <Button style={{ fontSize: '19px', color: '#18ADE4', border: '2px solid #18ADE4', width: '150px' }} className='mx-4' variant='dark' >Start For Free</Button>
          </Nav>
        </Navbar.Collapse>
        </div>      </Container>
    </Navbar>
  );
}
