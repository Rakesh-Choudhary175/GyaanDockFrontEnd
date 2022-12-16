import axios from "axios";
import React, { useEffect,useState } from "react";
import { Button ,Container,Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import UserProfile from "../profile/UserProfile";
import url from "../../Uri";


function Auth(){

    const navigate = useNavigate();


    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [isLoginPage, setIsLoginPage] = useState(false);


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

    function switchToLogin(){
        // alert("Switch to Login");
        setIsLoginPage(true);
    }

    function switchToRegister(){
        // alert("Switch to Register");
        setIsLoginPage(false);
    }


    function inputName(event){
        setName(event.target.value);
    }
    
    function inputEmail(event){
        setEmail(event.target.value);
    }

    function inputPassword(event){
        setPassword(event.target.value);
    }

    function inputConfirmPassword(event){
        setConfirmPassword(event.target.value);
    }

    function inputLoginEmail(event){
        setLoginEmail(event.target.value);
    }

    function inputLoginPassword(event){
        setLoginPassword(event.target.value);
    }

    function registerUser(){
        if(password != confirmPassword){
            alert("Password and Confirm Password do not match");
            return;
        }
        else if(name=="" || email=="" || password=="" || confirmPassword==""){
            alert("Please fill all the fields");
            return;
        }else{
            alert("Register Successfull");
        }  
    }

    function loginUser(){
        alert("Login User:"+email+" "+password);
    }

    return(
        <div>
            <Header/>
            <Container>
            {
                (isUserLoggedIn==true)?(
                    <UserProfile/>
                ):(
                    (isLoginPage==false)?(
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicName" onChange={inputName}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail" onChange={inputEmail}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={inputPassword}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword" onChange={inputConfirmPassword}>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <a href="/#/signIn" onClick={switchToLogin}>Existing User? Login!!</a>
                        <br/>
                        <br/>
                        <Button variant="primary" type="submit" onClick={registerUser}>
                            Submit
                        </Button>
                        </Form>
                    ):(
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail" onChange={inputLoginEmail}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={inputLoginPassword}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <a href="/#/signIn" onClick={switchToRegister}>New User? Register!!</a>
                        <br/>
                        <br/>
                            <Button variant="primary" type="submit" onClick={loginUser}>
                                Submit
                            </Button>
                        </Form>
                    )
                )
            }
            </Container>
            <Button onClick={toggleLogin}>Change Status</Button>
        </div>
    );
}

export default Auth;