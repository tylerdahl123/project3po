import React, { useState } from "react";
import { Container, Row } from "../Grid";

const LoginForm = () =>{ 
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginState, setLoginState] = useState();   

    const state = {
        loginState: false         
    }


    const onSubmit = e => {
        e.preventDefault();
        setLoginState(true);
        console.log("Form Submitted");
        console.log(email);
        console.log(password);
        console.log(state.loginState);
    };

    return(   
        <Container> 
        <form className="loginform" onSubmit={onSubmit}>
            <h1>Login</h1>
            <Row >                
            <input
                style={{margin:"auto"}}                
                type="email"
                name="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}               
            />
            </Row>
            <br />
            <Row>
            <input
                style={{margin:"auto"}}                
                type="password"
                name="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            />
            </Row>
            < br />
            <button className="submitbtn" value="submit">Submit</button>
        </form>
        </Container>   
    )
}

export default LoginForm;