import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Header from "../Header";
import url from "../../Uri";
import "./QuestionHomepage.css"

function QuestionHomepage() {

    const [questions, SetQuestions] = useState([]);
    const [areQuestionsFetched, SetAreQuestionsFetched] = useState(false);

    useEffect(() => {
        if (!areQuestionsFetched) {
            axios.get(url + "/api/v1/question").then(function (response) {
                console.log("success:", response.data);
                response.data.data.question.map((question) => {
                    questions.push(question);
                })
                SetAreQuestionsFetched(true);
            }).catch(function (error) {
                console.log(error);
            })
        }
    })

    function fetchQuestionDetails() {
        alert("Question clicked")
    }

    return (
        <div>
            <Header />
            {
                questions.map((question) => {
                    return (
                        <>
                            <Card className="question" style={{ width: "1200px", marginLeft: "20px" }} onClick={fetchQuestionDetails}>
                                <Card.Body>
                                    <Card.Title>{question.title}</Card.Title>
                                    <Card.Text>
                                        Difficulty:{question.difficulty}&nbsp;&nbsp;|&nbsp; Score:{question.score}&nbsp;&nbsp;|&nbsp;Category:{question.category}
                                    </Card.Text>
                                    <Card.Text className="overflow-wrap">
                                        {question.description}&nbsp;
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                        </>
                    );
                })
            }
        </div>
    );
}

export default QuestionHomepage;