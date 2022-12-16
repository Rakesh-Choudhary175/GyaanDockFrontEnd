import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card ,Button} from "react-bootstrap";
import Header from "../Header";
import url from "../../Uri";

function QuestionHomepage(){

    const [questions,SetQuestions] = useState([]);
    const [areQuestionsFetched,SetAreQuestionsFetched]= useState(false);

    useEffect(()=>{
        if(!areQuestionsFetched){
            axios.get(url+"/api/v1/question").then(function(response){
                console.log("success:",response.data);
            }).catch(function(error){
                console.log(error);
            })
        }
    })

    function fetchQuestionDetails(){
        alert("Question clicked")
    }

    return (
        <div>
            <Header/>
            <Card style={{width:"1000px",background:"#ABCDEF",marginLeft:"20px"}} onClick={fetchQuestionDetails}>
                <Card.Body>
                <Card.Title>Question1</Card.Title>
                <Card.Text>
                    Difficulty:   | Score:       | Category: 
                </Card.Text>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default QuestionHomepage;