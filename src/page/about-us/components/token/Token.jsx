import React from "react";
import "./token.css";
import ImgLeft from "./images/imgleft.png";
import ImgRight from "./images/imgright.png";
const Token = () => {
  return (
    <div className="box-token">
      <div className="container">
        <div className="inner-section">
          <div className="box-left">
            <img src={ImgLeft} />
          </div>
          <div className="box-right">
            <img src={ImgRight} />
            <h2>Tokenomics & Statisstics</h2>
            <p>
              WOLFI is available on Binance Smart Chain. The WOLFI token has a
              maximum supply of 9 trillion with about 7.2T $WOLFI token is
              circulation. There is a 9% tax on every buy and sell. 2% LP
              Acquisition, 2% Reflection, and 5% Burn on every TXN.
            </p>
          </div>
        </div>
        <ul className="list-items">
          <li className="box-item">
            <div className="box-title">
              <p>Name</p>
              <h3>WOLFI</h3>
            </div>
            <div className="box-content">
              <p>Total Supply</p>
              <h3>9,000,000,000,000</h3>
            </div>
          </li>
          <li className="box-item">
            <div className="box-title">
              <p>Symbol</p>
              <h3>WOLFI</h3>
            </div>
            <div className="box-content">
              <p>Max Supply</p>
              <h3>9,000,000,000,000</h3>
            </div>
          </li>
          <li className="box-item">
            <div className="box-title">
              <p>Decimals</p>
              <h3>18</h3>
            </div>
            <div className="box-content">
              <p>Network</p>
              <h3>BSC (BEP20)</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Token;
