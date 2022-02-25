import React from 'react'
import './benefit.css';
import Pig from './images/Pig.png';
import Frame from './images/Frame.png';
import Coin from './images/Coin.png';
const Benefit = () => {
  return (
    <div className='box-benefit'>
        <div className='container'>
            <h2>BEO-20 User Tokens</h2>
            <p className='sub-title'>Will give the users numberless benefits, including</p>
            <ul>
                <li>
                    <img src={Frame} />
                    <p>Earning NFTs and Collectibles</p>
                </li>
                <li>
                    <img src={Coin} />
                    <p>Participating in DeFi activities like staking, lending, borrowing and transacting etc</p>
                </li>
                <li>
                    <img src={Pig} />
                    <p>Becoming proficient in passive income and building strong net worth</p>
                </li>
            </ul>
            <p className='text-bottom'>
                <span>With these unwavering missions in mind</span>, we are offering an incredible platform to our users, where they can enjoy, learn, and earn - all at the same time. Missing out this wonderful opportunity is just not an option. 
            </p>
        </div>
    </div>
  )
}

export default Benefit