import React from "react";
import "./learntoearn.css";
import Banner from "./images/banner.png";
import BannerMobile from "./images/bannermobile.png";
import Game from "./images/game.png";
import Icon1 from "./images/icon1.png";
import Icon2 from "./images/icon2.png";
import Icon3 from "./images/icon3.png";
import Icon4 from "./images/icon4.png";
const LearnToEarn = () => {
  return (
    <div className="box-learntoearn">
      <div className="container">
        <div className="box-banner">
          <h2>
            What is Learn to <span>Earn & Play</span> to Earn?
          </h2>
          <img src={Banner} />
          <img src={BannerMobile} className="imgmobile"/>
          <div className="box-content">
            <div className="box-left">
              <p>
                Let's be honest, cryptocurrency modules and courses are found
                everywhere. Every social media influencer and so-called
                entrepreneurs “lecture” about crypto investments and marketing.
                But none of these are standard. And most of the time, these
                crypto modules are costly. This is where BEP-20 Learn to Earn
                strategy comes in.
              </p>
            </div>
            <div className="box-right">
              <p>
                BEP-20 presents our community with the opportunities to learn
                these investment modules and courses. At the end of each course
                or module, you will earn. With the spirit of inclusiveness and
                encouraging communities to learn more, the learn-to-earn
                incentive programs were built. Those who read or watch videos to
                complete a certain number of modules or unlock badges are
                rewarded for their hard work with tokens.
              </p>
            </div>
          </div>
        </div>
        <div className="box-overlay">
          <div className="box-table">
            <div className="box-left">
              <img src={Game} />
              <h2>For our gamers</h2>
              <p>
                we present an opportunity to play different games with a target
                in mind. Our gamers can play games and at the completion of
                tasks, they will be rewarded. Thus, this will allow our users to
                enjoy different games, simultaneously making good earnings.
              </p>
            </div>
            <div className="box-right">
              <ul>
                <li className="box-item">
                  <div className="box-icon">
                    <img src={Icon1} />
                  </div>
                  <div className="box-text">
                    <h3>Sustainable</h3>
                    <p>backed by prompt payments</p>
                  </div>
                </li>
                <li className="box-item">
                  <div className="box-icon">
                    <img src={Icon2} />
                  </div>
                  <div className="box-text">
                    <h3>Transparent and diverse</h3>
                    <p>
                      Since it provides sample and equal opportunities to all of
                      our users regardless of their background and financial
                      status
                    </p>
                  </div>
                </li>
                <li className="box-item">
                  <div className="box-icon">
                    <img src={Icon3} />
                  </div>
                  <div className="box-text">
                    <h3>Accountable and smooth process</h3>
                    <p>
                      Every single activity is properly tracked and the users
                      have peace of mind to focus on their learning and skills.
                    </p>
                  </div>
                </li>
                <li className="box-item">
                  <div className="box-icon">
                    <img src={Icon4} />
                  </div>
                  <div className="box-text">
                    <h3>Our DApps</h3>
                    <p>
                      allow the users to make all the financial activities under
                      one umbrella platform that befits all of their needs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnToEarn;
