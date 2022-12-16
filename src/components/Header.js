import React from "react";
import logo from "../assets/logo.png"
import {Button, Col, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate();

    function getQuestions(){
        navigate('/questions')
    }

    return (
        <div>
        <Row>
            <Col md={1}>
                <img src={logo} style={{height:"50px",width:"50px"}}/>    
            </Col>
            <Col md={1}>
                <h5>Gyaandock</h5>
            </Col>
            <Col md={6}>
            </Col>
            <Col md={1}>
                <Button onClick={getQuestions}>Questions</Button>
            </Col>
            <Col md={1}>
                <Button>Challenges</Button>
            </Col>
            <Col md={1}>
                <Button>Sign In</Button>
            </Col>    
        </Row>
        <br/>
        
        </div>
    );

}

export default Header;
