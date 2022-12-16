import React from "react";
import Header from "../Header";
import { Card, Button, DropdownButton, Dropdown, Nav } from "react-bootstrap";
function SolveQuestion() {
    return (

        <>

            <Header />


            <Card className="questionData" style={{ width: '35rem' }}>
                <Card.Header>
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="questionData">Description</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Comment">Comment</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Question Title</Card.Title>
                    <Card.Text>
                        Question Description
                    </Card.Text>
                    <Card.Title>Example</Card.Title>
                    <Card.Text>
                        Question Example
                    </Card.Text>
                    <Card.Title>Input Format</Card.Title>
                    <Card.Text>
                        Question Input Format
                    </Card.Text>
                    <Card.Title>Output Format</Card.Title>
                    <Card.Text>
                        Question Output Format
                    </Card.Text>
                    <Card.Title>Sample Input</Card.Title>
                    <Card.Text>
                        Question Sample Input
                    </Card.Text>
                    <Card.Title>Sample Output</Card.Title>
                    <Card.Text>
                        Question Sample Output
                    </Card.Text>
                </Card.Body>
            </Card>

        </>


    );
}

export default SolveQuestion;
