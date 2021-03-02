import React , {Component} from 'react'; 
import {motion} from 'framer-motion'
// css
import './../css/addItem.css';

class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={
            newItem :''
        }
    }

    render(){
        return(
            <motion.div
                initial={{x:'-100v<'}}
                animate={{x:0}}
            >
            <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={(e)=>this.setState({newItem: e.target.value})} value={this.state.newItem} required/>
                <input type="submit" value="Hit me!"/>
            </form>
            </motion.div>

        )
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.onAdd(this.state.newItem);
        this.setState({
            newItem:'',
        });

    }

}

export default AddItem; 