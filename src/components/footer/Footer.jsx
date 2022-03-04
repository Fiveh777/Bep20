import React from 'react'
import { Link } from 'react-router-dom';
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
        <div className='footer-bottom'>
          <div className='box-top'>
            <div className='box-logo'>
              <img src={Logo} className='logo'/>
              <ul>
                <li>
                  <Link to='#'><img src={Fb} /></Link>
                </li>
                <li>
                  <Link to='#'><img src={Tw} /></Link>
                </li>
                <li>
                  <Link to='#'><img src={Rd} /></Link>
                </li>
                <li>
                  <Link to='#'><img src={M} /></Link>
                </li>
                <li>
                  <Link to='#'><img src={Dc} /></Link>
                </li>
                <li>
                  <Link to='#'><img src={Tl} /></Link>
                </li>
                <li>
                  <Link to='#'><img src={Yt} /></Link>
                </li>
              </ul>
            </div>
            <div className='box-nav'>
              <div className='nav-item'>
                <h3>Resources</h3>
                <ul>
                  <li><Link to='#'>Who We Are</Link></li>
                  <li><Link to='#'>Learn and Play</Link></li>
                  <li><Link to='#'>GameFi</Link></li>
                  <li><Link to='#'>DeFi Governance's</Link></li>
                </ul>
              </div>
              <div className='nav-item'>
                <h3>Solutions</h3>
                <ul>
                  <li><Link to='#'>Decentralized Finance</Link></li>
                  <li><Link to='#'>Security Tokens</Link></li>
                  <li><Link to='#'>SEC-Registred Offerings</Link></li>
                  <li><Link to='#'>About Us</Link></li>
                </ul>
              </div>
              <div className='nav-item'>
                <h3>Partners</h3>
                <ul>
                  <li><Link to='#'>Valued Partners</Link></li>
                  <li><Link to='#'>Grants</Link></li>
                  <li><Link to='#'>Join Us</Link></li>
                </ul>
              </div>
              <div className='nav-item'>
                <h3>Company</h3>
                <ul>
                  <li><Link to='#'>About Us</Link></li>
                  <li><Link to='#'>Leadership</Link></li>
                  <li><Link to='#'>Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='box-bottom'>
            <div className="box-left">
              <p>©BEP20 2022</p>
            </div>
            <ul className='sub-nav'>
              <li><Link to='#'>Terms of Services</Link></li>
              <li><Link to='#'>Privacy Policy</Link></li>
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