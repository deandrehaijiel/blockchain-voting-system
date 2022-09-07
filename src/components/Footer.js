import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/blockchain.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <br></br>
            <br></br>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <br></br>
            <br></br>
            <p>Copyright © 2022 All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
