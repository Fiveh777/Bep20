import React from 'react'
import './tools.css';
import Daap from './images/Daap.png';
import SmartContracts from './images/SmartContracts.png';
import Geth from './images/Geth.png';
import Remix from './images/Remix.png';
import Solidity from './images/Solidity.png';
import Ganache from './images/Ganache.png';
import MetaMask from './images/MetaMask.png';
import Truffle from './images/Truffle.png';

const Tools = () => {
  return (
    <div className="box-tools">
            <div className="container">
                <h2>We Offer Blockchain Tools </h2>
                <p>To Unify Gamers, Developers, and Investors Under a Unanimous and Diverse Platform</p>
                <ul>
                    <li>
                        <a href='/'>
                        <img src={Daap} />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                        <img src={SmartContracts} />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                        <img src={Geth} />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                        <img src={Remix} />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                        <img src={Solidity} />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                        <img src={Ganache} />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                        <img src={MetaMask} />
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                        <img src={Truffle} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
  )
}
export default Tools