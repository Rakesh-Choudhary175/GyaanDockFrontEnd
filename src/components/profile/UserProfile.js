import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import url from "../../Uri";

function UserProfile(){

    const[name,setName] = useState(localStorage.getItem("userName"));
    const[email,setEmail] = useState(localStorage.getItem("userEmail"));
    const[password,setPassword] = useState("");
    const[score,setScore] = useState(localStorage.getItem("userScore"));
    const[nosOfSolvedQuestions,setNosOfSolvedQuestions] = useState(0);
    const[isUserDetailsFetched,setIsUserDetailsFetched] = useState(false);

    function handleLogOut(){
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userScore");
        window.location.reload();
    }
    

    return(
        <div>
            <Card style={{padding:"30px"}}>
                <Card.Title>
                    <h3>Name: {name}</h3>
                </Card.Title>
                <Card.Text>Email:  {email}</Card.Text>
                <Card.Text>Score:{score}</Card.Text>
            </Card>

            <br/>
            <br/>
                

            <Button onClick={handleLogOut}>Log Out</Button>


        </div>
    );
}

export default UserProfile;