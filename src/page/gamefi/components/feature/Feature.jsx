import React from 'react'
import './feature.css'
import Item1 from './images/item1.png'
import Item2 from './images/item2.png'
import Item3 from './images/item3.png'
import Item4 from './images/item4.png'
const Feature = () => {
  return (
    <div className="box-feature">
        <div className="container">
            <h2>The most common GameFI </h2>
            <p>is the play-to-earn. Certain GameFis also allow major DeFi services like lending and borrowing, yield farming, NFT rewards, cryptocurrency exchanges, etc.</p>
            <ul className="list-feature">
                <li className="box-item">
                    <img src={Item1} />
                    <h3>Real-time</h3>
                    <p>rewards, collectibles, and milestones</p>
                </li>
                <li className="box-item">
                    <img src={Item2} />
                    <h3>Instant Exchange</h3>
                    <p>of those collectibles into real-world spending.</p>
                </li>
                <li className="box-item">
                    <img src={Item3} />
                    <h3>Skills</h3>
                    <p>enhancement and developing expertise as a gamer</p>
                </li>
                <li className="box-item">
                    <img src={Item4} />
                    <h3>Competing</h3>
                    <p>with professional players and gamers</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Feature