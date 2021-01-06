// eslint-disable-next-line
import react from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { Container, Navbar, Nav, NavItem, Label, Input, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assets/logo.png";
import twitter from "../Assets/twitter.png";
import google from "../Assets/google.png";
import insta from "../Assets/instagram.png";
import copyright from "../Assets/copyright.png";
import facebook from "../Assets/facebook.png";

const Footer = () => {
  return (
    <Container className='footerContainer' fluid aria-expanded='md'>
      <div className='footer'>
          <Row>
          <div className= 'icons'>
              <Link>
              <img src= {twitter} alt= 'icon' className= 'icon'/>
              </Link>
              <Link>
              <img src= {google} alt= 'icon' className= 'icon' />
              </Link>
              <Link>
              <img src= {insta} alt= 'icon' className= 'icon' />
              </Link>
              <Link>
              <img src= {facebook} alt= 'icon' className= 'icon' />
              </Link>
          </div>
          </Row>
          {/* <div>
          <p id='terms'>Terms of Use. Privacy Policy</p>
          </div> */}
          <Row>
          <div className='copyright'>
          <img src={copyright} alt = 'icon' className= 'copyicon' />
          <p>Copyright. All right reserved</p>
          </div>
          </Row>
=      </div>
    </Container>
  );
};
export default Footer;
