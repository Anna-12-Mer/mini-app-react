import React, {Component} from 'react'; 

 
// css
import './../css/todoitem.css';



class TodoItem extends Component{

    displayItems(){
        var list  = this.props.item ;
        if (list){
                return(
                            <li key={this.props.index}>
                                    <div className="todo-item">
                                        <span className="item-name">{this.props.item}</span>
                                        <span className="item-remove" onClick={this.handleDelete}> x </span>
                                    </div>
                             </li>
                )
        }else{
            return (
               <div className='py-5' id='todo-wrapper'>
                   No List selected...
               </div>
           ) 
        }
    }
  handleDelete =()=>{
      this.props.onDelete(this.props.item);
    }
    render(){
        return(
          <div id='todo-wrapper'>
                <div id="todo-list">
                    { this.displayItems()}
                   </div>
            </div>


        )
    }
}

export default TodoItem; 