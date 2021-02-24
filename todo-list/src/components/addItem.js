import React , {Component} from 'react'; 

import './../css/addItem.css';

class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:[],
            newItem :''
        }
    }
    handleSubmit(e){
        e.preventDefault();
        var updateList= this.state.todos; 
        updateList.push(this.state.newItem);
        console.log(this.state.newItem);
        this.setState({
            todos: updateList,
        });
    }
    sendData(){
        this.props.parentCallback(this.state.todos)
    }
    render(){
        return(
            <form id="add-item" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={(e)=>this.setState({newItem: e.target.value})} required/>
                <input type="submit" value="Hit me!"/>
            </form>
        )
    }

}

export default AddItem; 