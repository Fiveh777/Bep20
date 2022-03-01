import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './header.css';
import Logo from './images/logo.png';

const Header = () => {
    const [itoggle, setItoggle] = useState(false)
    const handleSubmit = () => {
        setItoggle(!itoggle)
    }
    return (
        <div className="box-header">
            <div className="container">
                <div className="box-logo">
                    <Link to='/'>
                        <img src={Logo} />
                    </Link>
                </div>
                <div className={!itoggle ?"box-nav":"box-nav active"}>
                    <ul>
                        <li>
                            <Link to='/about'>Who We Are</Link>
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
                <div className='nav-bar' onClick={handleSubmit}>
                    <div className={!itoggle ?"bar-icon":"bar-icon active"}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
