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
            <div className="page-container view">
                <Container>

                    <div className="size">
                        <br />
                        <br />
                        Welcome!
                     </div>
                    <Row size="md-9">                    
                        <Col size="md-12">
                            <div>
                                <br />
                                <h3 className="hcolor">This website helps you stay on time!</h3>
                                <br /> 
                                <br />
                                <h3 className="hcolor">Press 'Login' to login or create a new account!</h3>
                            </div>
                            <br/>
                            <h4 className="hcolor">How your mind measures time: {seconds}</h4>
                            <br/>
                            <h4 className="hcolor">How time actually goes: {secondsTwo}</h4>
                            <br/>
                            <h5 className="hcolor"></h5>
                            <br/>
                            <br/>
                            <div className="spacing"></div>
                        </Col>
                        
            {/* Places the 3 boxes at the bottom of the screen */}
            <div className="md-12 boxes">
                <div className="columns">
                    <div>
                        <h2>Get Started</h2>
                        <p>We all have those moments where we think we have our schedule under control. Suddenly, we realize we only have 5 minutes to get somewhere 30 mintutes away.</p>
                    </div>
                </div>
                <div className="columns">
                    <div>
                        <h2>Login</h2>
                        <p>Login to be able to use this application across all your devices and never lose your schedule.(Mobile application coming soon.)</p>
                    </div>
                </div>
                <div className="columns">
                    <div>
                        <h2>Never Be Late Again</h2>
                        <p>The application that takes into account the little things in life that add up to a lot of time. The time it takes for you to brush your teeth, take a shower, put on clothes, etc. all taken into account when creating your schedule.</p>
                    </div>
                </div>
            </div>
            </Row>
            </Container>
        </div>
    )
}
