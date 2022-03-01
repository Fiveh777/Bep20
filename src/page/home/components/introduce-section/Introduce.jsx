import React from 'react'
import './introduce.css';
import ImageFirst from './images/first.png';
import ImageSecondLeft from './images/seconleft.png';
import ImageSecondRight from './images/secondright.png';
import ImageThird from './images/third.png';
import ImageThirdMobile from './images/thirdmobile.png';
const Introduce = () => {
    return (
        <div className="box-introduce">
            <div className="container">
                <div className="box-sub first-section">
                    <div className="box-left">
                        <h2>Best Crypto Token.</h2>
                        <p>Leverage on any tokens with a protocol trusted with billions for its price execution, super low fees and reliability.</p>
                        <div className="box-button">
                            <a href="/" className="btn-yellow">Buy Tokens Here</a>
                            <a href="/" className="btn-normal"><i className="fa fa-caret-right" aria-hidden="true"></i> Watch how it works</a>
                        </div>
                    </div>
                    <div className="box-right">
                        <img src={ImageFirst} />
                    </div>
                </div>
                <div className="box-sub second-section">
                    <div className="box-left">
                        <img src={ImageSecondLeft} />
                        <h3>Who we are?</h3>
                        <p>BEP-20 is a community-based network that aims at helping gamers, investors, developers, and other users in making borderless transactions. If there’s a problem that remains an unsolved obstacle for investors, gamers, and developers, it is the Centralized Control of banks and other financial institutions. To overcome this obstacle, we have come forward with an all-encompassing solution: Decentralized Finance (DeFi). </p>
                        <a href="/" className="btn-normal">Learn more about DeFi</a>
                    </div>
                    <div className="box-right">
                        <img src={ImageSecondRight} />
                        <h3>Revolution platform</h3>
                        <p>We believe that DeFi will revolutionize finance by making transactions, savings, exchanging funds, borrowing, and lending an easy and feasible process for everyone. We aim at providing a platform where everyone can make these transactional processes in a trustless and permissionless network in a peer-to-peer manner. Our dream is to provide a sustainable and equal platform to everyone, irrespective of their previous financial status. </p>
                    </div>
                </div>
                <div className="box-sub third-section">
                    <div className="box-left">
                        <img src={ImageThird} />
                    </div>
                    <div className="box-right">
                        <h2>Eliminating the <span>“Winner takes all”</span> mindset is our motto!</h2>
                        <p>Backed by blockchain, our initiative has the unwavering capability to eliminate the need for third parties and middlemen. Consequently, it will make the transaction process easy, convenient, flexible, and cheaper. Unlike the centralized financial system, BEP-20 provides you with a platform where you can self-bank all your transactions using our DeFi</p>
                        <img src={ImageThirdMobile} className='imgmobile' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce
