import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/blockchain.png';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" onClick={() => onUpdateActiveLink('Home')>
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Home" className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Home')}>Home</Nav.Link>
              <Nav.Link href="#Blockchain" className={activeLink === 'Blockchain' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Blockchain')}>Blockchain</Nav.Link>
              <Nav.Link href="#VotingSystem" className={activeLink === 'VotingSystem' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('VotingSystem')}>Voting System</Nav.Link>
            </Nav>
            <span className="navbar-text">        
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
