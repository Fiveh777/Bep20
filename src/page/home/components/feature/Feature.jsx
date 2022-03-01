import React from 'react'
import './feature.css';
import Learn from './images/Learn.png';
import Play from './images/Play.png';
import LearnMobile from './images/LearnMobile.png';
const Feature = () => {
  return (
    <div className="box-feature">
        <div className="container">
            <div className='box-learn box-sub'>
                <div className='box-left'>
                    <img src={Learn} />
                </div>
                <div className='box-right'>
                    <h2>Learn to Earn </h2>
                    <p className='sub-title'>Our mission is to facilitate developers with the inevitable opportunity of “Learn to Earn.” </p>
                    <p>BEP-20 has the mission to offer a diverse platform for developers and gamers where they can Learn to Earn. Our Learn to Earn mission will enable gamers and developers to equip themselves with the growing technology, simultaneously making good earnings. </p>
                    <p>BEP-20 community presents all the available facilities for developers to learn new technology trends and make handsome earnings out of them. With equal benefits and power, these users will be able to make borderless transactions and can carry out self-banking through our DeFi system.</p>
                    <img src={LearnMobile} className='imgmobile'/>
                </div>
            </div>
            <div className='box-play box-sub'>
                <div className='box-left'>
                    <h2>For gamers, we present a “Play to Earn” Platform</h2>
                    <p>Just like the developers, our gamers are not far behind in getting the most out of our services. BEP-20 offers an opportunity for our gamers community a worthwhile option of Play to Earn. </p>
                </div>
                <div className='box-right'>
                    <img src={Play} />
                </div>
            </div>
            <div className='box-bottom'>
                <h3>BEP-20 will allow users to enjoy the following benefits:</h3>
                <ul>
                    <li>
                        <h4>Decentralized Exchange (DEx)</h4>
                        <p>will allow users to smoothly carry out transactions and other financial activities. These include, but are not limited to, exchanging cryptocurrencies, staking, yield farming lending, borrowing, international transactions, etc. </p>
                    </li>
                    <li>
                        <h4>BEP-20 Play to Earn option</h4>
                        <p>will allow gamers to play simple games and earn upon completion of set tasks. </p>
                    </li>
                    <li>
                        <h4>BEP-20 has the mission</h4>
                        <p>mission to make passive income easy, convenient, and achievable for everyone - regardless of their financial background.</p>
                    </li>
                    <li>
                        <h4>Our Learn to Earn option</h4>
                        <p>option will facilitate the users to engage in cryptocurrency paid courses - both written and visual. In turn, these users will get paid at the completion of each course or module.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Feature