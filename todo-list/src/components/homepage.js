import React, {Component} from 'react';
import {motion} from 'framer-motion'

// component
import TodoItem from './todoitem'; 
import AddItem from './addItem';

const containerVariants={
    hiden:{
        opacity:0,
        x:'100vw'
    },
    visible:{
        opacity: 1,
        x:0,
        transition:{
            type: 'spring',
            delay:0.2
        }
    }
}

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
                     <TodoItem  key={index} item={item} onDelete={this.onDelete.bind(this)}/>
                );
            }); 
            return(
             <motion.div id='todo-wrapper'
                variants={containerVariants}
                initial="hiden"
                animate="visible"
             >
              <div id="todo-list" className='py-3'>
                  <motion.h2 
                  animate={{fontSize:100, color :"#576dce", x: 10 , y :-10 }}
                  >
                      To do List 
                  </motion.h2>
                 <p className='text-center'>The busiest people have the most leisure...</p>
                 <motion.ul
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay: 0.1}}
                 >
                     {list}
                 </motion.ul>
                 <AddItem onAdd={this.onAdd}/>
              </div>
             </motion.div>  
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
        console.log(this.state.todos);
    }
    onAdd(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }

}

export default Homepage; 