import React from "react";
import "./banner.css";
import ImgLeft from "./imgaes/imgleft.png";
import ImgRight from "./imgaes/imgright.png";
const Banner = () => {
  return (
    <div className="box-banner">
      <div className="container">
        <div className="box-sub box-top">
          <div className="box-left">
            <h2>What is <span>GameFi?</span></h2>
            <p>
              As a gamer, you probably have earned multiple collectibles and
              awards before. But have you ever exchanged them for real-world
              spending? Never, right? Well, we are here to solve this mystery of
              gamers.
              <br></br>It has been a long time dream of gamers that time spent
              playing games can earn them valued items in the real world. This
              is where our GameFi comes into play. This became a reality with
              the latest innovation of GameFi.
            </p>
          </div>
          <div className="box-right">
            <img src={ImgRight} />
          </div>
        </div>
        <div className="box-sub box-bottom">
          <div className="box-left">
            <img src={ImgLeft} />
          </div>
          <div className="box-right">
            <h2>GameFi Strategy </h2>
            <p className="sub-title">
              Our GameFi Strategy allows users to turn game points and
              collectibles into real-world spending!{" "}
            </p>
            <p>
              Given the unattained dreams of gamers worldwide, GameFi came into
              play to make those dreams real and achievable. By combining the
              power of the blockchain, Gaming, DeFi, and NFTs, an incredible
              innovation called GameFi came into existence. It incorporates a
              reward system for game players who complete a certain number of
              levels, attain a certain score, or take the lead position on a
              leaderboard.
            </p>
            <a href="#">Play to Earn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
