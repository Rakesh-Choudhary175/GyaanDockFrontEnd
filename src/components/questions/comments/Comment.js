import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import url from "../../../Uri";

function Comment() {

    const [comments, setComments] = useState([]);
    const [areCommentsFetched, SetAreCommentsFetched] = useState(false);

    const urlString = useLocation().pathname;

    const split = urlString.split("/")

    useEffect(() => {
        if (!areCommentsFetched) {
            axios.get(url + "/api/v1/question/" + split[2] + "/comment")
                .then(function (response) {
                    console.log(response.data)
                    setComments(response.data.data.comment);
                    SetAreCommentsFetched(true)
                }).catch(function (error) {
                    console.log(error)
                })
        }
    })

    const [newComment, SetNewComment] = useState("");
    const [newCode, SetNewCode] = useState("");

    function inputComment(event) {
        SetNewComment(event.target.value);
    }

    function inputCode(event) {
        SetNewCode(event.target.value);
    }

    function handleAddComment() {
        if (newComment === "" || newCode === "") {
            alert("Please fill all fields")
        } else {
            console.log(localStorage.getItem("jwtToken"))
            const data = JSON.stringify({ inputComment, inputCode });
            axios.post(url + "/api/v1/question/" + split[2] + "/comment", data, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("jwtToken"),
                    "Access-Control-Allow-Origin": "*",
                }
            })
                .then(function (response) {
                    console.log(response.data);
                    window.location.reload()
                }).catch(function (error) {
                    console.log("Error:", error);
                })
            alert("Comment added")

        }
    }

    function addComment() {
        return (
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName" onChange={inputComment}>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control type="text" placeholder="Enter Comment" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName" onChange={inputCode}>
                            <Form.Label>Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter Code" />
                        </Form.Group>
                        <Button variant="primary" onClick={handleAddComment}>Add Comment</Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }

    return (
        <>
            {
                (areCommentsFetched == true) ? (
                    comments.map(c => {
                        return (
                            <>
                                <Card>
                                    <Card.Title>{c.comment}</Card.Title>
                                    <Card.Text>{c.user.name}</Card.Text>
                                    <Card.Body>{c.code}</Card.Body>
                                </Card>
                                <br />
                                <br />
                            </>

                        )
                    })
                ) : (
                    null
                )
            }


            {
                addComment()
            }

        </>

    )
}

export default Comment;