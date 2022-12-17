import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Card, Button, DropdownButton, Dropdown, Nav, Row,Col, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Editor from "@monaco-editor/react";
import url from "../../Uri";
import "./SolveQuestion.css"

function SolveQuestion() {

    const navigate = useNavigate();
    const [question,SetQuestion] = useState();
    const [isQuestionFetched,SetIsQuestionFetched] = useState(false);



    const search = useLocation().pathname;

    var splits = search.split("/");
    // alert(splits[2]);
    console.log(splits[2]);

     // State variable to set users source code
     const [userCode, setUserCode] = useState(``);
    
     // State variable to set editors default language
     const [userLang, setUserLang] = useState("python");
     
     // State variable to set editors default theme
     const [userTheme, setUserTheme] = useState("vs-dark");
     
     // State variable to set editors default font size
     const [fontSize, setFontSize] = useState(20);
     
     // State variable to set users input
     const [userInput, setUserInput] = useState("");
     
     // State variable to set users output
     const [userOutput, setUserOutput] = useState("");
     
     // Loading state variable to show spinner
     // while fetching data
     const [loading, setLoading] = useState(false);
 
     const options = {
         fontSize: fontSize
     }
 
     // Function to clear the output screen
     function clearOutput() {
         setUserOutput("");
     }
 
     // Function to call the compile endpoint
     function compile() {
         setLoading(true);
         if (userCode === ``) {
         return
         }
     
         // Post request to compile endpoint
         axios.post(url+"/compile", {
         code: userCode,
         language: userLang,
         input: userInput }).then((res) => {
         setUserOutput(res.data.output);
         }).then(() => {
 
         setLoading(false);
         })
     }
 


    useEffect(()=>{
        if(!isQuestionFetched){
            axios.get(url+"/api/v1/question/"+splits[2],{
                headers:{
                    "Authorization": localStorage.getItem("jwtToken")
                }
            }).then(function(response){
                console.log("Response:"+response.data)
            }).catch(function(error){
                console.log("Error:"+error)
            })
        }
    })




    return (

        <>

            <Header />
            <Row>
                
                

                <Col md={5}>
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

                </Col>


                <Col md={7}>
                <>
                <div className="SolveQuestion">
      {/* <Navbar
        userLang={userLang} setUserLang={setUserLang}
        userTheme={userTheme} setUserTheme={setUserTheme}
        fontSize={fontSize} setFontSize={setFontSize}
      /> */}
      <div className="main" >
        <div className="left-container">
          <Editor
            options={options}
            height="calc(100vh - 50px)"
            width="100%"
            theme={userTheme}
            language={userLang}
            defaultLanguage="python"
            defaultValue="# Enter your code here"
            onChange={(value) => { setUserCode(value) }}
          />
          <button className="run-btn" onClick={() => compile()}>
             Run
          </button>
        </div>
        <div className="right-container">
          <h4>Input:</h4>
          <div className="input-box">
            <textarea id="code-inp" onChange=
              {(e) => setUserInput(e.target.value)}>
            </textarea>
          </div>
          <h4>Output:</h4>
          {loading ? (
            <div className="spinner-box">
              {/* <img src={spinner} alt="Loading..." /> */}
              <p>Loading...</p>
            </div>
          ) : (
            <div className="output-box">
              <pre>{userOutput}</pre>
              <button onClick={() => { clearOutput() }}
                 className="clear-btn">
                 Clear
              </button>
            </div>
          )}
        </div>
      </div>
                </div>
                </>
                </Col>
            </Row>

            

        </>


    );
}

export default SolveQuestion;
