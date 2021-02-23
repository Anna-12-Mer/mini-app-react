import React, {Component} from 'react'; 
import './../css/todoitem.css';

import AddItem from './addItem';

class TodoItem extends Component{
        constructor(props){
        super(props);
        this.state ={
            todos : ['Workout', 'Meditation', 'Practicing English']
        };
    }
    displayItems(){
        var list  = this.state.todos ;
        if (list){
                return(
                     <div className='py-5' id='todo-wrapper'>
                        <p className="text-center">To do List </p>
                          <div id="todo-list" className='py-5'>
                            <ul>
                              {
                                 list.map((item, index) =>{
                                   return(
                                      <li className="todo-item"  key={index}>
                                        <span className="item-name" >{item}</span>                                                <span className="item-remove" onClick={this.handleDelete}> x </span>
                                      </li>
                                   );
                                  })
                               } 
                            </ul>
                          </div>
                        <div id="todo-list">
                            <p>The busiest people have the most leisure...</p>
                            <AddItem onAdd={this.onAdd} />
                         </div>
                        </div>
                )
        }else{
            return (
               <div className='py-5' id='todo-wrapper'>
                   No List selected...
               </div>
           ) 
        }
    }
    onAdd(item){
            var  list  = this.state.todos;
            list.push(item);
            this.setState({
                todos: list
            })
    }
    render(){
        return(
            <div>
              { this.displayItems()}
            </div>

        )
    }
}

export default TodoItem; 