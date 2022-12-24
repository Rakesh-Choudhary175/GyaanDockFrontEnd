import React, { Component } from "react";
import { Card, Button, DropdownButton, Dropdown, Nav, Row, Col, Container } from "react-bootstrap";
import Editor from "@monaco-editor/react";

import "./Compiler.css";


export default class Compiler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: localStorage.getItem('input') || `test`,
            output: ``,
            language_id: localStorage.getItem('language_Id') || 1,
            user_input: ``,
        };
    }
    input = (event) => {

        event.preventDefault();

        this.setState({ input: event.target.value });
        localStorage.setItem('input', event.target.value)

    };


    userInput = (event) => {
        event.preventDefault();
        this.setState({ user_input: event.target.value });
    };
    language = (event) => {

        event.preventDefault();

        this.setState({ language_id: event.target.value });
        localStorage.setItem('language_Id', event.target.value)

    };

    submit = async (e) => {
        e.preventDefault();

        let outputText = document.getElementById("output");
        outputText.innerHTML = "";
        outputText.innerHTML += "Creating Submission ...\n";
        const response = await fetch(
            "https://judge0-ce.p.rapidapi.com/submissions",
            {
                method: "POST",
                headers: {
                    "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                    "x-rapidapi-key": "9b2bfe5c20msh2b3bd9b41f2b80dp127632jsn8f2c7d652893", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
                    "content-type": "application/json",
                    accept: "application/json",
                },
                body: JSON.stringify({
                    source_code: this.state.input,
                    stdin: this.state.user_input,
                    language_id: this.state.language_id,
                }),
            }
        );
        outputText.innerHTML += "Submission Created ...\n";
        const jsonResponse = await response.json();

        let jsonGetSolution = {
            status: { description: "Queue" },
            stderr: null,
            compile_output: null,
        };

        while (
            jsonGetSolution.status.description !== "Accepted" &&
            jsonGetSolution.stderr == null &&
            jsonGetSolution.compile_output == null
        ) {
            outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
            if (jsonResponse.token) {
                let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;

                const getSolution = await fetch(url, {
                    method: "GET",
                    headers: {
                        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                        "x-rapidapi-key": "9b2bfe5c20msh2b3bd9b41f2b80dp127632jsn8f2c7d652893", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
                        "content-type": "application/json",
                    },
                });

                jsonGetSolution = await getSolution.json();
            }
        }
        if (jsonGetSolution.stdout) {
            const output = atob(jsonGetSolution.stdout);

            outputText.innerHTML = "";

            outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
        } else if (jsonGetSolution.stderr) {
            const error = atob(jsonGetSolution.stderr);

            outputText.innerHTML = "";

            outputText.innerHTML += `\n Error :${error}`;
        } else {
            const compilation_error = atob(jsonGetSolution.compile_output);

            outputText.innerHTML = "";

            outputText.innerHTML += `\n Error :${compilation_error}`;
        }
    };

    submitAns = async (e) => {
        e.preventDefault();

        let outputText = document.getElementById("output");
        outputText.innerHTML = "";

        const response = await fetch(
            "https://judge0-ce.p.rapidapi.com/submissions",
            {
                method: "POST",
                headers: {
                    "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                    "x-rapidapi-key": "9b2bfe5c20msh2b3bd9b41f2b80dp127632jsn8f2c7d652893", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
                    "content-type": "application/json",
                    accept: "application/json",
                },
                body: JSON.stringify({
                    source_code: this.state.input,
                    stdin: this.state.user_input,
                    language_id: this.state.language_id,
                }),
            }
        );
        const jsonResponse = await response.json();

        let jsonGetSolution = {
            status: { description: "Queue" },
            stderr: null,
            compile_output: null,
        };
        while (
            jsonGetSolution.status.description !== "Accepted" &&
            jsonGetSolution.stderr == null &&
            jsonGetSolution.compile_output == null
        ) {

            if (jsonResponse.token) {
                let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;

                const getSolution = await fetch(url, {
                    method: "GET",
                    headers: {
                        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                        "x-rapidapi-key": "9b2bfe5c20msh2b3bd9b41f2b80dp127632jsn8f2c7d652893", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
                        "content-type": "application/json",
                    },
                });

                jsonGetSolution = await getSolution.json();
            }
        }

        if (jsonGetSolution.stdout) {
            const output = atob(jsonGetSolution.stdout);
            const ans = '0\n1\n2\n3\n4\n5\n';
            outputText.innerHTML = "";
            if (output === ans) {
                outputText.innerHTML += `ans is right`;
            }
            else {
                outputText.innerHTML += `ans is worng`;
            }
        } else if (jsonGetSolution.stderr) {
            const error = atob(jsonGetSolution.stderr);

            outputText.innerHTML = "";

            outputText.innerHTML += `\n Error :${error}`;
        } else {
            const compilation_error = atob(jsonGetSolution.compile_output);

            outputText.innerHTML = "";

            outputText.innerHTML += `\n Error :${compilation_error}`;
        }

    }

    render() {

        return (
            <>
                <Container>
                    <Card>
                        <Card.Body>
                            <label htmlFor="tags" className="mr-1">
                                <b className="heading">Language:</b>
                            </label>
                            <select
                                value={this.state.language_id}
                                onChange={this.language}
                                id="tags"
                                className="form-control form-inline mb-2 language"
                            >
                                <option value="54">C++</option>
                                <option value="50">C</option>
                                <option value="62">Java</option>
                                <option value="71">Python</option>
                            </select>


                            {/* <CodeEditorWindow
                                code={this.state.input}
                                // onChange={onChange}
                                language={this.state.language_id}
                                theme={"vs-dark"}
                            /> */}
                            <Editor
                                options={{ fontSize: "20" }}
                                height="calc(100vh - 50px)"
                                width="100%"
                                theme={"vs-dark"}
                                language={this.state.language_id}
                                defaultLanguage="python"
                                defaultValue="# Enter your code here"
                                value={this.state.input}
                                onChange={this.input}
                            />
                            <br />
                            {/* <textarea
                                required
                                name="solution"
                                id="source"
                                onChange={this.input}
                                className=" source"
                                value={this.state.input}
                            ></textarea> */}


                            <Button variant="outline-secondary" type="Compile" onClick={this.submit}>
                                Run Code
                            </Button>
                            &emsp;&emsp;

                            <Button variant="outline-success" type="submit"
                                onClick={this.submitAns}>Submit Code</Button>

                            <div className="mt-2 ml-5">
                                <span className=" badge-primary heading my-2 ">
                                    <i className="fas fa-user fa-fw fa-md"></i> User Input
                                </span>
                                <br />
                                <textarea id="input" onChange={this.userInput}></textarea>
                            </div>
                            <div className="mt-2 ml-5">
                                <span className=" badge-primary heading my-2 ">
                                    <i className="fas fa-user fa-fw fa-md"></i> Output
                                </span>
                                <textarea id="output"></textarea>
                            </div>

                        </Card.Body>
                    </Card>

                </Container>
            </>
        );
    }
}
