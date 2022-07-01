import React,{ Component } from 'react';

class AddUser extends Component{

    state = {
        name:null,
        age:null,
        isEditing:false
    }
    //call addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);  
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    render(){
        return(
            <div className="row">
                <form className="row_form" onSubmit={this.handleSubmit}>
                    <div className="row_form_input">
                        <input className='input' name="name" autoComplete="off" placeholder="Enter your name" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="row_form_input">
                        <input className='input' name="age" autoComplete="off" type="number" required placeholder="Enter your age" onChange={ this.updateState } />
                    </div>
                    <div className="row_form_input">
                        <input type="submit" value="Add" className="btnAdd"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddUser;