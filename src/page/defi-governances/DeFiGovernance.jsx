import React from "react";
import "./defi-governance.css";
import Img1 from "./images/1.png";
import Img2 from "./images/2.png";
import Img3 from "./images/3.png";
import Img4 from "./images/4.png";
const DeFiGovernance = () => {
  return (
    <div className="box-defigovernance">
      <div className="box-container">
        <h2>
          What is <span>DeFi Governance's</span> Purpose in the Cryptocurrency
          Industry?
        </h2>
        <div className="box-content">
          <p className="sub-title">
            Platforms that combine peer-to-peer (P2P) networks, algorithmic
            automation, and community incentive systems with decentralized
            finance (DeFi) have seen enormous growth in 2020, bringing the
            industry to the forefront of blockchain and financial technology
            (FinTech). Via the use of tokenized governance systems, DeFi aims to
            create more fair and decentralized organizations and industries than
            are now possible through traditional peer-to-peer trade or the
            blockchain nodal structure. Reiterating the blockchain community's
            persistent commitment to decentralization by giving users access to
            governance tokens. By using these governance tokens, the worldwide
            and decentralized community of stakeholders who utilize the platform
            and participate in the broader DeFi ecosystem may take over
            administration of the platform from the project's small group of
            founders, employees, and insiders. In order to make important
            choices concerning protocol updates, recruiting engineers, and even
            altering governance frameworks for DeFi initiatives, the project
            relies on governance procedures. For example, the governance process
            of a borrowing and lending platform may be used to decide the amount
            of collateral necessary to borrow money or to alter its interest
            rate model. Like a central exchange, a decentralized exchange (DEX)
            may modify the way its liquidity pools are handled by using its
            governance system. Another option is to leverage the governance
            process of a yield farming platform to employ a third-party code
            auditor.
          </p>
          <ul>
            <li>
              <img src={Img1} />
              <h3>Governance Models for Blockchain</h3>
              <p>
                Off-chain processes like as conferences, mailing lists, online
                forums, and other modes of coordination and decision-making were
                first used to establish the foundations of blockchain
                governance. Some stakeholders are more powerful than others in
                off-chain systems, though. Bitcoin core developers and miners,
                for example, have the greatest sway in the Bitcoin ecosystem
                since more casual users do not have the official methods of
                registering their participation.
                <br></br>An on-chain governance system that allows stakeholders
                to vote directly on protocol updates was created to give
                individual users greater power in the governance process. If a
                proposal receives the necessary number of votes, it is
                implemented in a smart contract and becomes a reality. The
                majority of DeFi solutions rely on on-chain governance. In order
                to cast a vote or propose a proposal, you usually need to have
                some kind of "governance token". There is some evidence to
                support the claim that on-chain governance is plutocratic due to
                the fact that the number of tokens a user owns frequently
                affects the weight of their vote.
              </p>
            </li>
            <li>
              <img src={Img2} />
              <h3>Tokens of Governance</h3>
              <p>
                If you want to vote or propose, you'll need to stake your
                governance tokens, which normally use the ERC-20 token standard
                and are commonly kept as collateral for that purpose. Initially,
                governance tokens cannot be acquired, however they may trade on
                exchanges following distribution as a reward for adopting the
                system. As a result, DeFi platform governance tokens have often
                been the subject of conjecture and speculation. A good protocol
                should thus make governance tokens more valuable since they
                provide protocol users greater influence over the allocation of
                resources and the ability to change incentives and capital
                flows.
              </p>
            </li>
            <li>
              <img src={Img3} />
              <h3>Processes of DeFi Governance</h3>
              <p>
                A platform's governance can only commence after tokens have been
                issued. DeFi governance structures that are most often used all
                follow the same basic procedure:
                <br></br>In the early stages of DeFi governance, stakeholders
                gather information about the community's views on particular
                concerns and possible adjustments. A platform's official
                governance forum and unofficial communication channels both host
                discussions. Ideally, discussion should focus on ideas and
                policy, however politicking is common as individuals strive to
                persuade others in the community to endorse their ideas or
                recommendations.
                <br></br>In an effort to bring forth new modifications to the
                system in a systematic and transparent manner, improvement
                proposals use a generic template consisting of the proposal's
                context and description as well as the code that may be changed.
                For the time being, developers are the ones who are submitting
                the bulk of the upgrade ideas. It is possible to debate and
                examine a suggested code modification in the community, and then
                modify it if required.
                <br></br>In order to have a valid vote, there must be a majority
                of those present, called a quorum. When a proposal has 100%
                support from voters, but the number of token holders who vote
                does not match the minimum percentage necessary, the vote is
                typically canceled. Low involvement in DeFi governance is a
                major issue. As a result, they may not be interested in
                participating in governance since it is time-consuming, less
                immediately rewarding, and/or they lack a strong opinion on the
                proposed modification to the protocol. In this case, they may
                not be interested in participating.
                <br></br>For the majority of DeFi protocols, a simple majority
                of more than 50% is sufficient to implement a new proposal on
                the blockchain. When an entity has a larger number of tokens,
                their vote has greater sway. Token holders may assign their
                voting authority to another address if they do not want to vote
                themselves. Once a vote has been taken, the idea may be put into
                practice. Changing the code is the last phase in the
                decentralized governance process since recommendations are
                generally software modifications.
              </p>
            </li>
            <li>
              <img src={Img4} />
              <h3>What Is Yield Farming? Examples of Compounds</h3>
              <p>
                As the first DeFi system to include a governance token, Compound
                set the standard for others to follow. A "yield farming"
                technique that aims to increase DeFi platform incentive
                structures was sparked by the launching of the COMP token in
                June 2020. People that contribute crypto assets to DeFi
                protocols in exchange for governance tokens are known as "yield
                farmers." DeFi dApps may then use these governance tokens to
                earn interest or get access to a variety of digital assets and
                financial instruments when they are deposited. Other DeFi
                systems followed Compound's example because of the efficiency of
                yield farming in bringing in fresh money and the skyrocketing
                value of governance tokens.
                <br></br>Platforms and solutions developed by DeFi are at the
                forefront of blockchain governance, proving that
                decentralization need not be sacrificed for efficiency. For now,
                however, DeFi governance tokens and fair launches imply that its
                main procedures will likely have a long-term influence on the
                blockchain industry.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeFiGovernance;
