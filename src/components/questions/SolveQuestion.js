import React from "react";
import Header from "../Header";
import { Card, Button } from "react-bootstrap";
import styles from "./SolveQuestion.css";

function SolveQuestion() {
    return (
        // <div>
        //     <h1>God</h1>
        // </div>
        <div>
            <Header />
            <Button variant="primary">Description</Button>{
                <Card style={{ position: "fixed", left: "5%", width: '35rem' }}>
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
            }
        </div>

    );
}

export default SolveQuestion;






