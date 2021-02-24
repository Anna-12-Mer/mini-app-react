import React, {Component} from 'react';

// component
import TodoItem from './todoitem'; 
import AddItem from './addItem';

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={
            todos : ['Homework', 'Sport'], 
        }
    }
    render(){
        var list = this.state.todos; 
        console.log(list);
            list= list.map((item, index)=>{
                return (
                     <TodoItem  key={index} item={item} onDelete={this.onDelete}/>
                );
            }); 
            return(
             <div id='todo-wrapper'>
              <div id="todo-list">
                 <p className='text-center'>The busiest people have the most leisure...</p>
                 <ul>{list}</ul>
                 <AddItem onAdd={this.onAdd}/>
              </div>
             </div>  
            )
    }
        //Custom functions
    onDelete(item){
        var updatedTodos = this.state.todos.filter((val, index)=>{
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    }
    onAdd(item){
        console.log(this.state);
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }

}

export default Homepage; 