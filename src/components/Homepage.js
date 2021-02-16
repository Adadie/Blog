// eslint-disable-next-line
import react from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";
import {
  Container,
  Form,
  Nav,
  NavItem,
  Button,
  Row,
  Col,
  Table,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "../Assets/profile.png";

const HomePage = () => {
  return (
    <Container className="homepageContainer" fluid>
      <div className='homePage'>
        <Row>
            <div>
          <Col>
            <img className="profileImg" src={profile} alt="img" />
          </Col>
          </div>
          <div className='intro'>
          <Col>
            <Row>
              <h1>-- Hey There,</h1>
            </Row>
            <Row>
              <h1>
                <span>I'm</span> Kashumba Junior Adadie
              </h1>
            </Row>
            <Row>
              <h1>Based In Rwanda</h1>
            </Row>
            <Row>
              <Table hover className='table'>
                <thead>
                  <tr>
                    <td>Web designer<span className = "vertical"></span></td>
                    <td>Frontend developer<span className = "vertical"></span></td>
                    <td>Backend developer<span className = "vertical"></span></td>
                    <td>Security System Engineer</td>
                  </tr>
                </thead>
              </Table>
            </Row>
          </Col>
          </div>
        </Row>
        <Row>
            <Button className='resumeButton'><Link to= '' className='buttonText'>Download Resume</Link></Button>
        </Row>
      </div>
    </Container>
  );
};
export default HomePage;
