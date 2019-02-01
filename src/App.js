import React, { Component } from 'react';
import Todos from "./components/Todos"
import Header from "./components/layout/Header"
import AddTodo from "./components/AddTodo"
import {BrowserRouter as Router, Route} from "react-router-dom"
import About from "./components/pages/About"
import axios from "axios"
import SearchTodoItem from "./components/SearchTodoItem"



class App extends Component {

  state = {
    todos : [],
    suggestions : []
  }


  filterTodos = (query) => {
    console.log(`update${query}`);
    query = query.toLowerCase();
    this.setState({
      suggestions : query === "" ? this.state.todos :this.state.todos.filter((todo) => todo.taskName.toLowerCase().startsWith(query)),
      todos : this.state.todos
    })
  }

  componentDidMount(){
    axios.get("https://sheltered-escarpment-45157.herokuapp.com/api")
    .then(res => {
      this.setState({todos : res.data,
        suggestions : res.data
      })
      
    })
  }

  markComplete = (id) =>{
    axios.put(`https://sheltered-escarpment-45157.herokuapp.com/api/update/task/${id}`)
    .then(
      this.setState({
        todos : this.state.todos.map((todo) => {
          if(todo.id === id)
            todo.isDone = !todo.isDone;
          return todo;
        })
      })
    )
    
  }

  delTodo = (id) =>{
    axios.delete(`https://sheltered-escarpment-45157.herokuapp.com/api/delete/task/${id}`)
    .then(res => {
      console.log(id);
      this.setState({
      todos : [...this.state.todos.filter((todo) => todo.id !== id)]
      
      })
      this.filterTodos("");
    })
    
  }

  AddTodo = (title) => {

    axios.post("https://sheltered-escarpment-45157.herokuapp.com/api/add/task",{
      taskName : title
    })
    .then(res => {
      console.log(res);
      const newTodo = {
        id : res.data.task_id,
        taskName : title,
        isDone : false
      }

      this.setState({
        
        todos : [...this.state.todos,newTodo]
      })

      this.filterTodos("");
    })
    
    
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="container">
          <Header/>

          <Route path="/" exact render= { props => (
            
            <React.Fragment>
              <AddTodo AddTodo={this.AddTodo}/>
    
              <SearchTodoItem todos = {this.state.todos} filterTodos={this.filterTodos}/>
              <ul className="list-group">
              <Todos todos = {this.state.suggestions} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </ul>
              
            </React.Fragment> 
          )
          }/>


          <Route path = "/about" component={About}/>
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
