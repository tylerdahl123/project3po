import React from 'react';

const TodoItem = (props) => {    

    return(
      <div>
        {props.content}
        <button className="delbtn" onClick={() => {props.onDelete(props.id)}}>x</button>
      </div>
    );
}

export default TodoItem;