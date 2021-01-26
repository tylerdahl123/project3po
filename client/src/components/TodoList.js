import React, {Component} from "react";
import TodoItem from "./TodoItem";
import { Container, Row, Col } from "./Grid";

const TodoList = (props) => {

    const handleDelete = (index) => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1);
        this.setState({tasks: newArr});
      }

    const todos = props.tasks.map((todo, index) => {
      return <TodoItem content={todo} key={index} id={index} onDelete={props.onDelete}
      />    
    })
    return( 
      <div className="todolist">
          <Container>  
            <Row>    
                <Col size="md-12">
                    <br/>
                        {todos}
                    <br/>
                </Col> 
            </Row> 
        </Container> 
      </div>
    );
  }

  export default TodoList;