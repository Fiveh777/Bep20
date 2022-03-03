import React from "react";
import './cases.css';
import ImgRight from './images/img.png';
const Cases = () => {
  return (
    <div className="box-case">
      <div className="container">
        <div className="box-content">
          <div className="box-left">
            <h2>Unique Cases</h2>
            <p>
              In unique cases where GameFi incorporates a DAO, it becomes a
              global community of gamers. These gamers would earn rewards for
              playing and vote on next-level changes or new types of games to
              introduce in the system. As a result, the gamers community will
              have a platform where they can achieve their dreams and enhance
              their skills.
            </p>
          </div>
          <div className="box-right">
            <img src={ImgRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
