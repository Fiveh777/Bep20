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
                            <Link to="/">Who We Are</Link>
                        </li>
                        <li>
                            <Link to="/learntoearn">Learn and Play</Link>
                        </li>
                        <li>
                            <Link to="/gamefi">GameFi</Link>
                        </li>
                        <li>
                            <Link to="/defigovernance">DeFi Governance's</Link>
                        </li>
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-bar" onClick={handleSubmit}>
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
