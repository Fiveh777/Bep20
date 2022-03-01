import React from "react";
import "./faq.css";
import { Accordion } from "react-bootstrap-accordion";
const Faq = () => {
  return (
    <div className="box-faq">
      <div className="container">
        <h2>Frequency Asked Questions</h2>
        <div className="box-acc">
          <Accordion title="What is DeFi?" show>
            <p>
              Using public blockchains like Bitcoin and Ethereum, a new
              decentralized financial system called Decentralized Finance, or
              DeFi, is being developed. <br></br>
              Public blockchains vary from private networks controlled by
              governments and conventional financial institutions in six key
              ways: <br></br>
              Anybody in the globe may connect to the network and develop apps
              since there are no restrictions on who can do so. <br></br>
              Thousands of machines spread throughout the network concurrently
              store and retrieve records. Blockchain transactions are always
              verifiable since they are recorded in the public record.A DeFi
              device does not need a central authority. <br></br>
              Censorship Token transfer, custody, and exchange cannot be altered
              or invalidated by a central entity. <br></br>
              Programmable: Developers may create low-cost financial services by
              programming programs. Tokens on the product's decentralized
              network have all the features of traditional tokens.
            </p>
          </Accordion>
          <Accordion title="What are some practical applications of a decentralized financial system?">
            <p>Lorem</p>
          </Accordion>
          <Accordion title="How much money can you make in the DeFi market?">
            <p>Lorem</p>
          </Accordion>
          <Accordion title="Are there any downsides to this plan">
            <p>Lorem</p>
          </Accordion>
          <Accordion title="In terms of DeFi's future, what do you think?">
            <p>Lorem</p>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
