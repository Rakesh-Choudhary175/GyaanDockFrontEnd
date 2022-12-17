import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Card, Button, DropdownButton, Dropdown, Nav, Row, Col, Container, CardGroup } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// import Editor from "@monaco-editor/react";
import url from "../../Uri";
import "./SolveQuestion.css"
import Navbar from "./Navbar";
import Compiler from "./Compiler";


function SolveQuestion() {

    const[isQuestion,SetIsQuestion] = useState(true);

    function showComments(){
        if(showQuestion!=false)
            SetIsQuestion(false)
    }

    function showQuestion(){
        if(showQuestion!=true)
            SetIsQuestion(true)
    }

    function QuestionDetails() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Question Title</Card.Title>
                    <Card.Text>
                        This challenge works with a custom-designed markup language HRML. In HRML, each element consists of a starting and ending tag, and there are attributes associated with each tag. Only starting tags can have attributes. We can call an attribute by referencing the tag, followed by a tilde, '~' and the name of the attribute. The tags may also be nested.
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
        )
    }

    function fetchQuestionDetails() {
        return (
            <Container>
                <Card className="questionData" >
                    <Card.Header>
                        <Nav justify variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="questionData" onClick={showQuestion}>Description</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Comment" onClick={showComments}>Comment</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        
                        {
                            (isQuestion==true)?(
                                
                                QuestionDetails()
                                
                            ):(
                               
                                   <h1>Comment</h1> 
                                
                            )
                            // QuestionDetails()
                        }
                    </Card.Body>
                </Card>
            </Container>
        )
    }

    return (

        <>

            <Header />
            <CardGroup >
                <Card border="white">
                    <Card.Body>
                        {
                            fetchQuestionDetails()
                        }
                    </Card.Body>
                </Card>
                <Card border="white">
                    <Card.Body>
                        <Compiler />
                    </Card.Body>
                </Card>
            </CardGroup>


            <br />
            <br />
        </>


    );
}

export default SolveQuestion;
