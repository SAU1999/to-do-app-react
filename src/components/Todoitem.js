import React, { Component } from 'react'
import PropType from "prop-types"

export class Todoitem extends Component {
    
    getStyle = () => {
        return {
            textDecoration : this.props.todo.isDone ? "line-through" : "none",
            background : "#f4f4f4",
            
        }
    }
    
    
  render() {
    const {id,taskName} = this.props.todo;
    return (
        
        
            <li style= {this.getStyle()} className = "list-group-item">  
                <input type="checkbox" checked={this.props.todo.isDone} onChange={this.props.markComplete.bind(this,this.props.todo.id)}/>
                {" "}
                {taskName} 
                <button className="btn btn-danger float-right" onClick= {this.props.delTodo.bind(this,id)}><i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </li>
                
        
    )
  }
}

Todoitem.PropType = {
    todo : PropType.object.isRequired
}



export default Todoitem

