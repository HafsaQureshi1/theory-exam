import social from '../assets/images/Social.png'
import { Navbar, Container,  Button, Image } from 'react-bootstrap';

import { Nav } from 'react-bootstrap';
// Footer.js
import logo from '../assets/images/logo.png'
import React from 'react';
import image2 from '../assets/images/image 2.png'

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="container-fluid justify-content-center text-center">
        <span><img className='img-fluid' src={logo} alt="" /><br /> </span>
        <Nav className="me-auto justify-content-center text-center">
            <Nav.Link style={{ fontSize: '21px', fontFamily: 'inter' }} className='fw-bold text-light' >Web3makr</Nav.Link>
            <Nav.Link style={{ fontSize: '21px', fontFamily: 'inter' }} className='fw-bold text-light'>White paper</Nav.Link>
            <Nav.Link style={{ fontSize: '21px', fontFamily: 'inter' }} className='fw-bold text-light'> Services</Nav.Link>
            <Nav.Link style={{ fontSize: '21px', fontFamily: 'inter' }} className='fw-bold text-light'> Tool</Nav.Link>
            <Nav.Link style={{ fontSize: '21px', fontFamily: 'inter' }} className='fw-bold text-light'> Contact Us</Nav.Link>
           </Nav>
      </div>
<div className="container-fluid text-secondary">
  <div className="row">
  <div style={{textAlign:'left'}} className="col-lg-6 col-md-6  col-sm-6">
Copyright 2022 © Web3makr</div>
<div style={{textAlign:'right'}} className="col-lg-6 col-md-6  col-sm-2">
<img src={social} alt="" />
</div>
</div>
</div>
    </footer>
  );
};

export default Footer;
