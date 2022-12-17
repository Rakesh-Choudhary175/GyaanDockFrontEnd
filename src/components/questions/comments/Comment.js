import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import url from "../../../Uri";

function Comment(){

    const [comments,setComments] = useState([]);
    const [areCommentsFetched,SetAreCommentsFetched] = useState(false);

    const urlString = useLocation().pathname;

    const split = urlString.split("/")

    useEffect(()=>{
        if(!areCommentsFetched){
            axios.get(url+"/api/v1/question/"+split[2]+"/comment")
            .then(function(response){
                console.log(response.data)
                setComments(response.data.data.comment);
                SetAreCommentsFetched(true)
            }).catch(function(error){
                console.log(error)
            })
        }
    })

    return(
            (areCommentsFetched==true)?(
                comments.map(c=>{
                    return(
                        <>
                        <Card>
                            <Card.Title>{c.comment}</Card.Title>
                            <Card.Body>{c.code}</Card.Body>
                        </Card>
                        <br/>
                        <br/>
                        </>

                    )
                })
            ):(
                null
            )
        
    )
}

export default Comment;