import React from "react";
import "./banner.css";
import Speaker from "./images/speaker.png";
import OfficeGal from "./images/OfficeGal.png";
const Banner = () => {
  return (
    <div className="box-banner">
      <div className="container">
        <div className="box-sub first-section">
          <div className="box-left">
            <h2>
              A few words
              <span>About us</span>
            </h2>
            <p>
              Imagine a decentralized financial system, made absolutely to be
              governed by you. Seems like an unbelievable technological
              revolution, right?
              <br></br>What if we tell you that the revolution has begun and
              exchanging, lending, staking or borrowing funds can now be
              controlled via a permission less, and reliable network fully
              formed in a peer-to-peer mode?
            </p>
          </div>
          <div className="box-right">
            <img src={Speaker} />
          </div>
        </div>
        <div className="box-sub second-section">
          <div className="box-left">
            <p>
              For ages, we have been using banks or other financial
              organizations that exercised a strong centralized management on
              our finances. But we now have the facility to practice
              decentralized finance (DeFi) to establish a complete governance on
              our finances. Blockchain systems will now either update their
              procedures or will go obsolete, since the old blockchain
              methodologies do not have proper DeFi platform representation
              techniques. To ensure no third party interferes in your
              transactions and you have the utter power to regulate your trades,
              several decentralized autonomous organizations are providing a
              self-banking opportunity in a flexibly programmable and encoded
              system.{" "}
            </p>
          </div>
          <div className="box-right">
            <p>
              We introduce the BEP-20 network, a community based initiative that
              specifically targets anyone who prefers his transactions without
              any third party interactions. Our community includes investors,
              gamers, and developers who stand with us in establishing an
              equality based financial system that is sustainable, accountable
              and completely transparent, providing everyone the equal
              opportunity to generate wealth regardless of his economic status.{" "}
            </p>
          </div>
        </div>
        <div className="box-sub third-section">
          <div className="box-left">
            <img src={OfficeGal} />
          </div>
          <div className="box-right">
            <h2>But why us?</h2>
            <p>
              Our proposal for the development of such a community has been
              enabled by the blockchain, and will abolish the necessity of third
              party interventions, that cost us time and unnecessary transaction
              charges. In addition to that, we are influencing blockchain
              functionality tools as well, such as NFTs, smart contracts and
              DApps to amalgamate a community whereby users can practice DeFi
              and earn a grand worth of wealth.
              <br></br>BEP-20 is about deriving the historical trends to
              formulate new and better ones by establishing a society where
              economy is decentralized, and the concept of elites or poor does
              not exist. We look forward to a bright future where all classes of
              people can benefit from equal wealth generation while performing
              multiple financial actions in an equally progressive community.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
