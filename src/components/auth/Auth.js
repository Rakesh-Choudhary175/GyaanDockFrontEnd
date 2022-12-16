import React, { useEffect,useState } from "react";
import { Button ,Container,Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import UserProfile from "../profile/UserProfile";

function Auth(){

    const navigate = useNavigate();
    
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);


    useEffect(()=>{
        if(localStorage.getItem("jwtToken") != null){
            setIsUserLoggedIn(true);
        }
    })

    function toggleLogin(){
        if(isUserLoggedIn==true){
            // localStorage.removeItem("jwtToken");
            setIsUserLoggedIn(false);
        }else{
            setIsUserLoggedIn(true);
            // navigate("/signIn");
        }
    }

    return(
        <div>
            <Header/>
            <Container>
            {
                (isUserLoggedIn==true)?(
                    <UserProfile/>
                ):(
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                )
            }
            </Container>
            <Button onClick={toggleLogin}>Change Status</Button>
        </div>
    );
}

export default Auth;