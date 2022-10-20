import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import story1 from "../assets/img/story1.png";
import qrcode from "../assets/img/blockvote-qrcode.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Story = () => {

  return (
    <section className="Story" id="Story">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Voting System</h2>
                <p>Blockchain technology came into the ground to offers decentralized nodes for electronic voting and is used to produce electronic voting systems mainly because of their end-to-end verification advantages.</p>
                <Tab.Container id="Story-tabs" defaultActiveKey="first">
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
                      <h2>Manual Voting System</h2>
                      <br></br>
                      <img className="story" src={story1} alt="Manual Voting System"></img>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h2>Blockchain Voting System</h2>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2>BlockVote</h2>
                      <br></br>
                      <img className="qrcode" src={qrcode} alt="BlockVote"></img>
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
