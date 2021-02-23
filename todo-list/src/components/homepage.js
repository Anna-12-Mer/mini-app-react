import React, {Component} from 'react';

// component
import TodoItem from './todoitem'; 

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={
            todos : ['Workout', 'Meditation', 'Practicing English']
        };
    }
    displayList(){
        var list = this.state.todos; 
        if(list.loading){
            return(
                <p>Loading ..!</p>
            )
        } else{
               return(
                    <TodoItem list= {this.state.todos}/>
               )
        }
    }
    render(){

        return(
            <div>
                {this.displayList()}
            </div>

        )
    }
}

export default Homepage; 