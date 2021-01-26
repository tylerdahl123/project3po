import React, { Component } from 'react';
import { Container, Row, Col } from './Grid';

class AddTodo extends Component {
    state = { todonew: '' };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.todonew === '') return;
        this.props.onFormSubmit(this.state.todonew);
        this.setState({ todonew: '' });
      }   

    render() {
      return(      
        <Container>
          <Row>
            <Col size="md-12">
              <form onSubmit={this.handleSubmit}>
                <input 
                  type='text'
                  className='input'
                  placeholder='Need a reminder?'
                  value={this.state.todonew}
                  onChange={(e) => this.setState({todonew: e.target.value})}
                  style={{textAlign:"center"}}
                  className="todoinput"
                />
                <br />
                <button className="addbtn">Add to List</button>
              </form>
            </Col>
          </Row>
        </Container>       
      );
    }
  }

  export default AddTodo;