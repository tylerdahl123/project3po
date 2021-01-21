import React,  {useState, useEffect} from "react";
import {Col, Row, Container} from "../components/Grid";
import "./style.css"


export default function Main(){

    const [seconds, setSeconds] = useState(0);
    const [secondsTwo, setSecondsTwo]= useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsTwo(secondsTwo => secondsTwo + 1);
    }, 800);
    return () => clearInterval(interval);
  }, []);

        return(
            <div className="page-container">
                <Container>
                    <div className="size">Welcome!</div>
                    <Row>                    
                        <Col size="md-12">
                            <div>
                                <br />
                                <h3>This website helps you stay on time!</h3>
                                <br /> 
                                <br />
                                <h3>Press 'Login' to login or create a new account!</h3>
                            </div>
                            <br/>
                            <h4>How your mind measures time: {seconds}</h4>
                            <br/>
                            <h4>How time actually goes: {secondsTwo}</h4>
                            <br/>
                            <h5>This is how our application helps to keep you on time.</h5>
                            <br/>
                            <div>Maybe some more information about how the application works or a nice picture?</div>
                            <br/>
                            <div>Maybe some more information about how the application works or a nice picture?</div>
                        </Col>
                    </Row>
                <h1>Definitely change the colors!</h1>            
                <h1>Is this working?</h1>
                <h1>Yes it is.</h1>
                <br />
                <br />
            {/* Places the 3 boxes at the bottom of the screen */}            
                <div className="boxes">   
                    <Row>                                       
                        <Col size="md-4">
                            <div>
                                <h2>Get Started</h2>
                                <p>We all have those moments where we think we have our schedule under control. Suddenly, we realize we only have 5 minutes to get somewhere 30 mintutes away. </p>
                            </div>
                        </Col>
                        <Col size="md-4">
                            <div>
                                <h2>Login</h2>
                                <p>Login to be able to use this application across all your devices and never lose your schedule.(Mobile application coming soon.)</p>
                            </div>
                        </Col>
                        <Col size="md-4">
                            <div>
                                <h2>Never Be Late Again</h2>
                                <p>The application that takes into account the little things in life that add up to a lot of time. The time it takes for you to brush your teeth, take a shower, put on clothes, etc. all taken into account when creating your schedule.</p>
                            </div>
                        </Col>
                    </Row>
                </div>                   
            </Container>         
        </div>          
    )
}
