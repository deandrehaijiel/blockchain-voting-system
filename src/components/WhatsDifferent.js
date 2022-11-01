import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import story1 from "../assets/img/story1.png";
import story2 from "../assets/img/story2.png";
import qrcode from "../assets/img/blockvote-qrcode.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const WhatsDifferent = () => {

  return (
    <section className="WhatsDifferent" id="WhatsDifferent">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Voting System</h2>
                <p>Blockchain technology came into the ground to offers decentralized nodes for electronic voting and is used to produce electronic voting systems mainly because of their end-to-end verification advantages.</p>
                <Tab.Container id="WhatsDifferent-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Manual Voting System</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Blockchain Voting System</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">BlockVote</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <img className="story" src={story1} alt="Manual Voting System"></img>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <img className="story" src={story2} alt="Blockchain Voting System"></img>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <a href="https://github.com/deandrehaijiel/blockvote" target="_blank"><img className="qrcode" src={qrcode} alt="BlockVote"></img></a>
                      <br></br>
                      <h2>BlockVote</h2>              
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
