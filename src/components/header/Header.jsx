import React from 'react'
import './header.css';
import Logo from './images/logo.png';

const Header = () => {
    return (
        <div className="box-header">
            <div className="container">
                <div className="box-logo">
                    <img src={Logo} />
                </div>
                <div className="box-nav">
                    <ul>
                        <li>
                            <a href='/'>Who We Are</a>
                        </li>
                        <li>
                            <a href='/'>Learn and Play</a>
                        </li>
                        <li>
                            <a href='/'>GameFi</a>
                        </li>
                        <li>
                            <a href='/'>DeFi Governance's</a>
                        </li>
                        <li>
                            <a href='/'>About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
