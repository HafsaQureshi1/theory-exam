import React from "react";
import future from '../assets/images/future.png';
import f1 from '../assets/images/f1.png';

export default function Future() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${future})`,
          backgroundSize: 'cover',
          width: '100%',
          height: '200vh',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="container-fluid my-5"
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 1,
          }}
        >
          <p className="fw-bold" style={{ fontSize: '3rem' }}>The Future of web3 no code</p>
          <p>Web3Makr allows you to incorporate top-ranked blockchain platforms into your work through the drag and drop feature.</p>
        </div>
        <div style={{}}
         className="container-fluid text-center">
        <div className="row">
            <div className="col-lg-6 text-light">
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                multichain <br /> dashboard <br />tool
            </div>
          <div className="col-lg-6">
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <img className='img-fluid' src={f1} alt="" />
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}
