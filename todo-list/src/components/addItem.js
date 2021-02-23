import React , {Component} from 'react'; 

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
            <form id="add-item" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={(e)=>this.setState({newItem: e.target.value})} required/>
                <input type="submit" value="Hit me!"/>
            </form>
        )
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.newItem)
    }
}

export default AddItem; 