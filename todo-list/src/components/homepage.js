import React, {Component} from 'react';

// component
import TodoItem from './todoitem'; 


class Homepage extends Component{
    render(){
        return(
            <div>
                <TodoItem />
            </div>
        )
    }

}

export default Homepage; 