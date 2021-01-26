import React, {Component} from 'react';
import {Container, Row, Col} from './../components/Grid';

import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

class TodoPage extends Component{
    state = {
        tasks: ['Use this to help remember the little things!', 'Like prepping your meals!', 'Or remembering to leave a little early to grab coffee before work!',]
      };

    handleSubmit = task => {
        this.setState({tasks: [...this.state.tasks, task]});
    }

    render(){
    return(
        <div>
        <div className="remtitle">
            <p> Reminders and Tips </p>
        </div>
        <div className="page-container">             
            <div className="content-wrap">                    
                <Container>                   
                    <Row>
                        <Col size="md-12">
                            <h1>To Do List</h1>
                            <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
                        </Col>
                    </Row>                      
                    <Row>
                        <Col size="md-12">
                            <AddTodo onFormSubmit={this.handleSubmit} />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col size="md-12">
                            <h1>Tips and Tricks!</h1>
                            <br />
                            <div className="tiplist">
                                <p> Need some help getting there on time? We all do sometimes!</p><p> Break your routine down into steps 
                                    like getting ready, packing/prepping anything you need to bring, getting anything done you need to do before you leave 
                                    (feeding pets, getting the slowcooker ready, taking medication, etc.), grabbing your keys, and set smaller reminders for yourself
                                    so the act of leaving doesn't feel like such a huge task! It helps you remember what you need to do and gets rid of the anxiety 
                                    that you forgot something that can hold you up at the door.</p><p> Notice you're low on gas? Add it to your reminders so you 
                                    remember to leave a little bit earlier the next day or grab it on the way back from your event! No more worries!
                                    </p>
                                    <p>
                                    Feels good to get organized, doesn't it? ;)
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>  
        </div>
        </div>
    )
}
}

export default TodoPage;