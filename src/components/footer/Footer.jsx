import React from 'react'
import './footer.css';
import Logo from './images/logo.png';
import Fb from './images/1.png';
import Tw from './images/2.png';
import Rd from './images/3.png';
import M from './images/4.png';
import Dc from './images/5.png';
import Tl from './images/6.png';
import Yt from './images/7.png';

const Footer = () => {
  return (
    <div className='box-footer'>
      <div className='container'>
        <div className='footer-top'>
          <h3>Want to know how to market your NFT Collections? </h3>
          <p>Head over to our blog for best tips</p>
          <a href='#'>Want to know</a>
        </div>
        <div className='footer-bottom'>
          <div className='box-top'>
            <div className='box-logo'>
              <img src={Logo} className='logo'/>
              <ul>
                <li>
                  <a href='#'><img src={Fb} /></a>
                </li>
                <li>
                  <a href='#'><img src={Tw} /></a>
                </li>
                <li>
                  <a href='#'><img src={Rd} /></a>
                </li>
                <li>
                  <a href='#'><img src={M} /></a>
                </li>
                <li>
                  <a href='#'><img src={Dc} /></a>
                </li>
                <li>
                  <a href='#'><img src={Tl} /></a>
                </li>
                <li>
                  <a href='#'><img src={Yt} /></a>
                </li>
              </ul>
            </div>
            <div className='box-nav'>
              <div className='nav-item'>
                <h3>Resources</h3>
                <ul>
                  <li><a href='#'>Who We Are</a></li>
                  <li><a href='#'>Learn and Play</a></li>
                  <li><a href='#'>GameFi</a></li>
                  <li><a href='#'>DeFi Governance's</a></li>
                </ul>
              </div>
              <div className='nav-item'>
                <h3>Solutions</h3>
                <ul>
                  <li><a href='#'>Decentralized Finance</a></li>
                  <li><a href='#'>Security Tokens</a></li>
                  <li><a href='#'>SEC-Registred Offerings</a></li>
                  <li><a href='#'>About Us</a></li>
                </ul>
              </div>
              <div className='nav-item'>
                <h3>Partners</h3>
                <ul>
                  <li><a href='#'>Valued Partners</a></li>
                  <li><a href='#'>Grants</a></li>
                  <li><a href='#'>Join Us</a></li>
                </ul>
              </div>
              <div className='nav-item'>
                <h3>Company</h3>
                <ul>
                  <li><a href='#'>About Us</a></li>
                  <li><a href='#'>Leadership</a></li>
                  <li><a href='#'>Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='box-bottom'>
            <div className="box-left">
              <p>©BEP20 2022</p>
            </div>
            <ul className='sub-nav'>
              <li><a href='#'>Terms of Services</a></li>
              <li><a href='#'>Privacy Policy</a></li>
            </ul>
            <div className="box-left mobile">
              <p>©BEP20 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer