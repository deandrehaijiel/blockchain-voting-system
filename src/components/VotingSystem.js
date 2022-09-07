import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const VotingSystem = () => {

  return (
    <section className="VotingSystem" id="VotingSystem">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Voting System</h2>
                <p>Blockchain technology came into the ground to offers decentralized nodes for electronic voting and is used to produce electronic voting systems mainly because of their end-to-end verification advantages.</p>
                <Tab.Container id="VotingSystem-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Current Blockchain Model</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Benefits of Blockchain</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Summary of Blockchain</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <h2>What Makes a Good Blockchain?</h2>
                      <p>Scalability Security and Decentralization (Blockchain Trilemma)</p>
                      <p>Ethereum 2.0 aims to be a blend of the perfect blockchain trilemma its main upgrade from Ethereum 1.0 is to switch from a proof-of-work (PoW) consensus mechanism to a proof-of-stake (PoS) model.</p>
                      <p>In general, for blockchains, Transactions must be verified in a decentralized manner. Ethereum, like other cryptocurrencies such as Bitcoin, currently uses a proof-of-work consensus mechanism.</p>
                      <p>In this system, miners employ a machine’s processing power to solve complex mathematical puzzles and verify new transactions. The first miner to solve a puzzle adds a new transaction to the record of all transactions that make up the blockchain. They are then rewarded with the network’s native cryptocurrency. However, this process can be hugely energy-intensive, especially as the processing power used by miners that didn't solve the puzzle goes to waste. Similar to how miners check transactions and make sure the network isn't processing fake transactions, proof of stake refers to users using the network's native cryptocurrency and becoming validators. Due to the decoupling of the consensus algorithm from energy-intensive computer processing, PoS is significantly more energy-efficient than PoW. It also implies that less CPU power is required to secure the blockchain.</p>
                      <p>Security has been a priority in the design of Ethereum 2.0. Smaller validators are used in most PoS networks, which results in a more centralized system and worse network security. Ethereum 2.0 is significantly more decentralized and hence secure because it needs a minimum of 16,384 validators. In addition to changing its consensus mechanisms, increasing its speed and efficiency also allows it to avoid bottlenecks and process more transactions simultaneously.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h2>Strengthened Security</h2>
                      <p>With the increase in sensitive information and data being distributed online, blockchains can aid in how information is being accessed. Blockchains can help manage privacy issues by encrypting personal information and setting up permissions to restrict access. By creating documentation that can’t be altered and is encrypted end to end, blockchains help prevent fraud and unfair usage.</p>
                      <br></br>
                      <h2>Improved Transparency</h2>
                      <p>Before blockchain, different databases are used for each department in a company. However, with blockchain, which uses a distributed ledger, all activity are recorded similarly across multiple locations. Different levels of permissions are given to the employees depending on the role they play in the organization and everyone who has access sees the same information at the same time. This enables members to view entire histories of any transaction and data which helps in eliminating any chances for fraud.</p>
                      <br></br>
                      <h2>Instant Traceability</h2>
                      <p>Blockchain creates an audit string that records the origin of an asset and at the same time, every step on its journey. For example, in industries where consumers are concerned about the source of a product that might have violated any constitutional rights or an industry which is plagued by forgery, this helps with providing evidence, traceable data can be shared with customers directly.</p>
                      <br></br>
                      <h2>Increased Efficiency and Automation</h2>
                      <p>With blockchain, transactions can be completed more quickly, and data can be transferred swiftly as compared to conventional paper-intensive processes which are time-consuming and less eco-friendly. With "smart contracts," transactions can even be automated, enhancing your productivity and accelerating the procedure even further. This overall reduces human error and relies on a middleman to verify the terms of the contract.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2>Summary</h2>
                      <p>Blockchain implements cryptography in a distinctive method within the software. To ensure that votes are accurately recorded, it provides a tamper-proof record that can be easily examined.
Voters may cast their ballots electronically or using a mobile device thanks to the safe and unchangeable properties of blockchain, as opposed to going to their local polling station or mailing a ballot that needs to be manually processed by election officials. Votes tracked using a blockchain enable a speedier, tamper-proof method of counting votes, which may increase voter turnout, improve ballot security, and do so at a reduced cost.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
