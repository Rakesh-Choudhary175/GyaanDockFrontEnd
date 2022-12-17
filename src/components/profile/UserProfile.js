import axios from "axios";
import React, { useState } from "react";
import { Button, Card, CardGroup, Row, Col } from "react-bootstrap";
import url from "../../Uri";
import logo from "../../assets/logo.png"

function UserProfile() {

    const [name, setName] = useState(localStorage.getItem("userName"));
    const [email, setEmail] = useState(localStorage.getItem("userEmail"));
    const [password, setPassword] = useState("");
    const [score, setScore] = useState(localStorage.getItem("userScore"));
    const [nosOfSolvedQuestions, setNosOfSolvedQuestions] = useState(0);
    const [isUserDetailsFetched, setIsUserDetailsFetched] = useState(false);

    function handleLogOut() {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userScore");
        window.location.reload();
    }


    return (
        <div>
            <Card style={{ padding: "30px", background: "rgba(0,152,186,0.2)" }}>
                <Card.Body>
                    <Row>
                        <Col md={3}>
                            <img src={logo} style={{ textAlign: "right", height: "100px", width: "100px", marginLeft: "40px" }} />
                        </Col>
                        <Col md={{ span: 4, offset: 0 }}>
                            <Card.Title>
                                <h2 >Name: {name}</h2>
                            </Card.Title>
                            <Card.Text><h3>Email:  {email}</h3></Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <br />
            <Card className="text-center" style={{ height: "100px", background: "rgba(0,152,186,0.2)" }}>
                <br />
                <Card.Text><h3>Score:{score}</h3></Card.Text>
            </Card>

            <br />

            <div className="d-grid gap-2">
                <Button size="lg" onClick={handleLogOut}>Log Out</Button>
            </div>


        </div >
    );
}

export default UserProfile;