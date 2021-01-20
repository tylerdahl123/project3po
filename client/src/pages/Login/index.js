import React from "react";
import {Col, Row, Container} from "../../components/Grid";
import LoginForm from "../../components/Loginform";
import CreateForm from "../../components/Createaccount";

const Login=()=>{   

    const [show, setShow] = React.useState(false)
    const onClick = () => {
        if (!show){
            setShow(true)
        } else {
            setShow(false)
        }
    }
    return(
        <div className="page-container">
            <Container>
                <div className="content-wrap">
                    <Row> 
                        <Col size="md-3"></Col>                   
                        <Col size="md-6">
                           { show ? <CreateForm /> : <LoginForm /> }  
                           <br />                                                  
                            <button className="createbtn" onClick={onClick}>
                               {show ? "Back" : "Create Account"}                               
                            </button>                
                        </Col>
                        <Col size="md-3"></Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Login;