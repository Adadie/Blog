// eslint-disable-next-line
import react from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Container, Navbar, Nav, NavItem, Label, Input, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assets/logo.png";
import twitter from "../Assets/twitter.png";
import google from "../Assets/google.png";
import insta from "../Assets/instagram.png";
import facebook from "../Assets/facebook.png";

const NavBar = () => {
  return (
    <Container className='navbarContainer' fluid>
      <Navbar className="navBar">
        <Row>
          <Nav >
              <Col>
            <NavItem className="logo">
              <Link to="/">
                {/* <img src={logo} alt="logo" /> */}
                <h1>
                  <span id="K">K</span><span id="J"><sub>J</sub></span>
                  <span id="A">A</span>
                </h1>
              </Link>
            </NavItem>
            </Col>
            <Col>
            <div className="navLinks">
              <NavItem>
                <Link className="navLink">Home</Link>
              </NavItem>
              <NavItem>
                <Link className="navLink">Portfolio</Link>
              </NavItem>
              <NavItem>
                <Link className="navLink">Services</Link>
              </NavItem>
              <NavItem>
                <Link className="navLink">About</Link>
              </NavItem>
              <NavItem>
                <Link className="navLink">Blogs</Link>
              </NavItem>
              <NavItem>
                <Link className="navLink">Experience</Link>
              </NavItem>
              <NavItem>
                <Link className="navLink">Contact</Link>
              </NavItem>
            </div>
            </Col>
            <Col>
            <div className="icons">
              <NavItem>
                <Link>
                  <img className="icon" src={twitter} alt="icon" />
                </Link>
              </NavItem>
              <NavItem>
                <Link>
                  <img className="icon" src={google} alt="icon" />
                </Link>
              </NavItem>
              <NavItem>
                <Link>
                  <img className="icon" src={insta} alt="icon4" />
                </Link>
              </NavItem>
              <NavItem>
                <Link>
                  <img className="icon" src={facebook} alt="icon6" />
                </Link>
              </NavItem>
            </div>
            </Col>
          </Nav>
        </Row>
      </Navbar>
    </Container>
  );
};
export default NavBar;
