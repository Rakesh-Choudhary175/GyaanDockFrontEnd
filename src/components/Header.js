import React from "react";
import logo from "../assets/logo.png"
import {Col, Row} from "react-bootstrap";
function Header(){
    return (
        <div>
        <Row>
            <Col md={1}>
                <img src={logo} style={{height:"100px",width:"100px"}}/>
                
            </Col>
            <Col md={1}>
            <h5>Gyaandock</h5>
            </Col>
        </Row>
        </div>
    );

}

export default Header;
