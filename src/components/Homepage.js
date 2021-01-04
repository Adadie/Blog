import react from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";
import { Container, Button, Row, Col, Table, Td, Th } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "../Assets/profile.png";

const HomePage = () => {
  return (
    <Container className="homepage" fluid>
      <div>
        <Row>
          <Col xs="2">
            <img className="profile" src={profile} alt="image"></img>
          </Col>
          <Col>
            <div className="intro">
              <Row>
                <h1>-- Hey There,</h1>
              </Row>
              <Row>
                <h1>
                  <span>I'</span>m Kashumba Junior Adadie
                </h1>
              </Row>
              <Row>
                <h1>Based in Rwanda</h1>
              </Row>
              <Row>
                <Table className="table" responsive>
                  <td>
                    <h3>Web Designer</h3>
                  </td>
                  <div class="vl"></div>
                  <td>
                    <h3>Frontend Developer</h3>
                  </td>
                  <div class="vl"></div>
                  <td>
                    <h3>Backend Developer</h3>
                  </td>
                  <div class="vl"></div>
                  <td>
                    <h3>Security System Engineer</h3>
                  </td>
                </Table>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Button className="resume">
            <Link className="link" to="">
              Download Resume
            </Link>
          </Button>
        </Row>
      </div>
    </Container>
  );
};
export default HomePage;
