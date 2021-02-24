import React, {Component} from 'react';

// component
import TodoItem from './todoitem'; 


class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={
            todos : [], 
        }
    }
    render(){
        return(
            <div>
                <TodoItem  todos={this.todos}/>
            </div>
        )
    }

}

export default Homepage; 