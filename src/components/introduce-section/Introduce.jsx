import React from 'react'
import './introduce.css';
import ImageFirst from './images/Composition_02 5.png';
import ImageSecondLeft from './images/image_2022_02_24T04_16_25_549Z.png';
import ImageSecondRight from './images/image_2022_02_24T04_16_31_833Z.png';
import ImageThrid from './images/081.png';
const Introduce = () => {
    return (
        <div className="box-introduce">
            <div className="container">
                <div className="first-section">
                    <div className="box-left">
                        <h2>Best Crypto Token.</h2>
                        <p>Leverage on any tokens with a protocol trusted with billions for its price execution, super low fees and reliability.</p>
                        <div className="box-button">
                            <a href="/">Buy Tokens Here</a>
                            <a href="/">Watch how it works</a>
                        </div>
                    </div>
                    <div className="box-right">
                        <img src={ImageFirst} />
                    </div>
                </div>
                <div className="second-section">
                    <div className="box-left">
                        <img src={ImageSecondLeft} />
                        <h3>Who we are?</h3>
                        <p>BEP-20 is a community-based network that aims at helping gamers, investors, developers, and other users in making borderless transactions. If there’s a problem that remains an unsolved obstacle for investors, gamers, and developers, it is the Centralized Control of banks and other financial institutions. To overcome this obstacle, we have come forward with an all-encompassing solution: Decentralized Finance (DeFi). </p>
                        <a href="/">Learn more about DeFi</a>
                    </div>
                    <div className="box-right">
                        <img src={ImageSecondRight} />
                        <h3>Revolution platform</h3>
                        <p>We believe that DeFi will revolutionize finance by making transactions, savings, exchanging funds, borrowing, and lending an easy and feasible process for everyone. We aim at providing a platform where everyone can make these transactional processes in a trustless and permissionless network in a peer-to-peer manner. Our dream is to provide a sustainable and equal platform to everyone, irrespective of their previous financial status. </p>
                    </div>
                </div>
                <div className="third-section">
                    <div className="box-left">
                        <img src={ImageThrid} />
                    </div>
                    <div className="box-right">
                        <h2>Eliminating the <span>“Winner takes all”</span> mindset is our motto!</h2>
                        <p>Backed by blockchain, our initiative has the unwavering capability to eliminate the need for third parties and middlemen. Consequently, it will make the transaction process easy, convenient, flexible, and cheaper. Unlike the centralized financial system, BEP-20 provides you with a platform where you can self-bank all your transactions using our DeFi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce
