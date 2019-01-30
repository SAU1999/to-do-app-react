import React, {Component} from "react"

class SearchTodoItem extends Component{
    constructor(){
        super();
        this.state = {
            title : "",
            
        }
    }

    onChange = (e) => {
        
        this.setState({
            title : e.target.value,
            
        })
        console.log(e.target.value);

        this.props.filterTodos(e.target.value);
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <form className=" form-inline mb-4">
                    <input 
                        type = "text" 
                        className="form-control"
                        
                        onChange = {this.onChange}
                        placeholder = "Start Typing to filter..."
                        
                        
                    >
                    
                    </input>
                    
                    <button className="form-control btn btn-success ml-2">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>

                    
                </form>
            </div>
        )
    }
}

export default SearchTodoItem;
