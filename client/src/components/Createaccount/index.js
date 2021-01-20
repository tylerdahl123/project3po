import React, { useState } from "react";
import { Container, Row} from "../Grid";

const CreateForm = () => {

        const [email, setEmail] = useState();
        const [password, setPassword] = useState();
      
        const onSubmit = e => {
            e.preventDefault();
            console.log("Form Submitted");
            console.log(email);
            console.log(password);
        };

    return(   
        <Container> 
            <form className="createform" onSubmit={onSubmit}>
                <h1>Create an Account</h1>                
                <Row>                
                <input
                    style={{margin:"auto"}}
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />
                </Row>
                <br />
                <Row>
                <input
                    style={{margin:"auto"}}
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                </Row>
                <br />
                <button className="submitbtn" value="submit">Submit</button>
            </form>
        </Container>   
    )
}

export default CreateForm;