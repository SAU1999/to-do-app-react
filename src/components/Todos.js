import React, { Component } from 'react';
import Todoitem from "./Todoitem"
import PropType from "prop-types"

class Todos extends Component {
  render() {
    return (
      
      this.props.todos.map((todo) => 
        
          <Todoitem key= {todo.id} todo={todo} markComplete = {this.props.markComplete} delTodo={this.props.delTodo}/>
        
      )
    );
  }
}

Todos.PropType = {
  todos : PropType.array.isRequired
}

export default Todos;
