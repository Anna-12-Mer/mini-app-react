import React, {Component} from 'react'; 
import './../css/todoitem.css';

import AddItem from './addItem';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state={
          todos :[]
        }   
    }
    callbackFunction = (listData) => {
      this.setState({todos: listData})
    }
    displayItems(){
        var list  = this.props.todos ;
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
                            <AddItem parentCallback = {this.callbackFunction}/>
                         </div>
                        </div>
                )
        }else{
            return (
               <div className='py-5' id='todo-wrapper'>
                   No List selected...

                  <div id="todo-list">
                      <p>The busiest people have the most leisure...</p>
                      <AddItem parentCallback = {this.callbackFunction}/>
                   </div>
               </div>
           ) 
        }
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