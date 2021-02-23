import React, {Component} from 'react'; 
import './../css/todoitem.css'

class TodoItem extends Component{
    displayItems(){
        var {list} = this.props ;
        console.log(list);
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
                                          
                                                    <span className="item-name" >{item}</span>
                                                    <span className="item-remove" onClick={this.handleDelete}> x </span>
                                                
                                             </li>
                                            );
                                        })
                                    } 
                            </ul>
                          </div>
                        
                        </div>
                )
        }else{
            return (
               <div>
                   No List selected...
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