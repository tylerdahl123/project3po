import React from "react";
import {Col, Row, Container} from "../../components/Grid";
import "./style.css"

export default function About(){
    return(
        <div className="page-container">
            <div className="content-wrap">
                <Container>
                    <Row>
                        <Col size="md-12">                   
                                <h1>About Page</h1>
                                <br />
                                
                                <br />
                                <br />
                                <p> This application is designed to allow the user to integrate tasks, appointments, reminders and more into a calendar. This calendar will then remind the user of the items input at a desired interval and also helpshow the user how much time needs to be allocated to accomplish that task on time.</p>
                                <br />
                                <p> A lot of us struggle with time management. The goal of this application is to aid those in need of morestructure and guidance into managing their time, as well as, those who just simply want reminders to keepthemselves on track.</p>
                                <br />
                                <h2>The Creators</h2>
                                <div class="uicard"><div class="image"><img src="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"/></div><div class="content"><div class="header">Tyler Dahlgren</div><div class="meta">dahlgren15@gmail.com</div><div class="description">I am a 25 year old software developer currently enrolled in the UCLA coding Bootcamp.</div></div><div class="extra content"><a><i aria-hidden="true" class="user icon"></i></a><a class="nav-link" href="https://github.com/tylerdahl123">GitHub</a></div></div>
                                <div class="uicard"><div class="image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiycWMXkQEe0YZfTLKp3oBtv7cCfqpNA3cg&usqp=CAU"/></div><div class="content"><div class="header">Alex Kelly</div><div class="meta">itsalexkelly@gmail.com</div><div class="description">Full Stack Web Developer, Lifelong Learner</div></div><div class="extra content"><a><i aria-hidden="true" class="user icon"></i>software developer</a><a class="nav-link" href="https://github.com/luvwitch">GitHub</a></div></div>
                                <div class="uicard"><div class="image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSos8WJJwI6qi-oyEqumgt5myV32u4aP3FvUA&usqp=CAU"/></div><div class="content"><div class="header">Tito Rivera</div><div class="meta">titorivera0707@gmail.com</div><div class="description">Aspiring full-stack web developer currently attending UCLA's coding boot camp..</div></div><div class="extra content"><a><i aria-hidden="true" class="user icon"></i></a><a class="nav-link" href="https://github.com/titorivera0707">GitHub</a></div></div>
                                <div class="uicard"><div class="image"><img src="https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg"/></div><div class="content"><div class="header">Kyle Gibson</div><div class="meta">kyle.gibson22@yahoo.com</div><div class="description">I am currently learning full-stack web development at UCLAs coding boot camp program</div></div><div class="extra content"><a><i aria-hidden="true" class="user icon"></i></a><a class="nav-link" href="https://github.com/kyle-gibson">GitHub</a></div></div>
                                <div class="uicard"><div class="image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeBHbkbuITSfje6dMrD-gRVeZLvCtUTCUbQ&usqp=CAU"/></div><div class="content"><div class="header">Javier Caro</div><div class="meta"><span class="date">Jcaro1993@gmail.com</span></div><div class="description">I am currently learning full-stack web development at UCLAs coding boot camp program..</div></div><div class="extra content"><a><i aria-hidden="true" class="user icon"></i></a><a class="nav-link" href="https://github.com/jcaro1993">GitHub</a></div></div>
                        </Col>
                        </Row>
                </Container>
            </div>
        </div>
    )
}
