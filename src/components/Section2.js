import gr from '../assets/images/gr.png'

import img1 from '../assets/images/img1.png'
import React from "react";
import s2 from '../assets/images/s2.png';

export default function Section2() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${s2})`,
          backgroundSize: 'cover',
height:'auto'          
        }}
        className="container-fluid my-3"
      >
        <br /><br />
        <div className="container-fluid">
        <div className="row">
<div className="p-2 col-lg-6 ">
<h1 style={{fontSize:'60px'}} className='my-4 mx-2 fw-bold'>Create <br /> your  own web3 <br /> masterpiece</h1>
<p className='mx-3 my-3' style={{fontSize:'31px'}}>Most entrepreneurs want to create their own web3 sites, unfortunately,<br /> they dont know much about creating one. Web3Makr makes it easier for newbies to create <br /> a blockchain-based collectibles <br /> solution without the hassle of leaving their favorite creation <br /> tools and by simple drag and drop functionality.</p>
</div>
<div className="col-lg-6">
    <img className='img-fluid' src={img1} alt="" />
</div>

        </div>
      </div>
<div className="container my-5">
<div className="row">
    <div className="col-lg-6 col-md-6 col-sm-6">
        <img className='img-fluid' src={gr} alt="" />
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 my-4 ">
        <p style={{fontSize:'2.5rem'}} className='fw-bold my-5'>
        Can be changed to customizable ready made web3 dapps templates.  
        </p>
        <p style={{fontSize:'2rem'}}>
            <span style={{color:'#18ADE4'}} className=''>01</span> NFT(ERC721).
        </p>
        <p style={{fontSize:'2rem'}}>
            <span style={{color:'#18ADE4'}} className=''>02</span> DEFI
        </p >
        <p style={{fontSize:'2rem'}}>
            <span style={{color:'#18ADE4'}} className=''>03</span> Smart Contracts.
        </p>
        <p style={{fontSize:'2rem'}}>
            <span style={{color:'#18ADE4'}} className=''>04</span> Gamefi
        </p>
        <p style={{fontSize:'2rem'}}>
            <span style={{color:'#18ADE4'}} className=''>05</span> Metaverse
        </p>

    </div>
</div>

</div>

      </div>    </>
  );
}
