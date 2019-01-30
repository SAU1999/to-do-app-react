import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title  : ""
    }

    onChange = (e) => {
        this.setState({
            title : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({title : ""})
        this.props.AddTodo(this.state.title);
    }

  render() {
    return (
      <form onSubmit= {this.onSubmit} className="form-inline mb-4">
          <input 
            type = "text"
            name = "title"
            placeholder = "Add Todo .."
            value = {this.state.title}
            onChange = {this.onChange}
            required
            className="form-control"
          />
          <input 
            cla
            type="submit"
            value= "Submit"
            className="btn btn-primary ml-2 form-control"
          />
      </form>
    )
  }
}

export default AddTodo
