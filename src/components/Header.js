import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const navigate = useNavigate();

  function getQuestions() {
    navigate("/questions");
  }
  function aboutUs() {
    navigate("/aboutUs");
  }

  function handleSignIn() {
    navigate("/signIn");
  }
  return (
    <div>
      <Row>
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="/">
            <img
              alt="img"
              src={logo}
              style={{
                textAlign: "right",
                height: "50px",
                width: "50px",
                marginLeft: "40px",
              }}
            />
            &nbsp;&nbsp;Gyaandock
          </a>
          <Col md={7}></Col>
          <Col md={1} style={{ marginTop: "20px" }}>
            <Button variant="outline-primary" onClick={getQuestions}>
              Questions
            </Button>
          </Col>
          <Col md={1} style={{ marginTop: "20px" }}>
            <Button variant="outline-primary" onClick={aboutUs}>
              About Us
            </Button>
          </Col>
          <Col md={1} style={{ marginTop: "20px" }}>
            <Button variant="outline-primary" onClick={handleSignIn}>
              <FaUserAlt />
              Sign In
            </Button>
          </Col>
        </nav>
      </Row>
      <br />
    </div>
  );
}

export default Header;
