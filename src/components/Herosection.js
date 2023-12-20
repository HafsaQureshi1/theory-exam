import React from 'react';
import but from '../assets/images/button.png';
import g1 from '../assets/images/g1.png';
import h1 from '../assets/images/h1.png';
import her from '../assets/images/her.png';
import Container from 'react-bootstrap/Container';

export default function Herosection() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${her})`,
          backgroundSize: 'cover',
          width: '100%',
        }}
        className="container-fluid bg-dark"
      >
        <Container className="justify-content-center text-center">
          <br />
          <br />
          <br />
          <br />
          <p
            className="text-light fw-bold"
            style={{
              fontSize: 'clamp(3rem, 5vw, 10rem)', // Responsive font size
              lineHeight: '1.2',
            }}
          >
            Web3Makr Redefining
            <br />
            <span style={{ fontSize: 'clamp(1.8rem, 4vw, 8rem)' }}>
              How you create
            </span>
            <br />
            <span style={{ fontSize: 'clamp(2rem, 3vw, 5rem)' }}>
              Unlock the blockchain potential to create Web3 Applications
            </span>
            <br />
            <img className="img-fluid" src={but} alt="" />
            <br />
            <img className="img-fluid" src={h1} alt="" />
            <br />
          </p>
        </Container>
      </div>
      <Container className="justify-content-center text-center">
        <img src={g1} alt="" className="img-fluid" />
      </Container>
    </>
  );
}
