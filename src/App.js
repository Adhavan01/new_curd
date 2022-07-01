import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';
import Style from './scss/style.scss';

class App extends Component{

    // Default dummy data
    state = {

        users:[
          {name:"Adhavan", age:26, isEditing:false},
          {name:"Abirami", age:22, isEditing:false},
          {name:"Infanta", age:26, isEditing:false}
    
        ]
      }
      // (newUser) is received from AddUser.js
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }

      // when press edit button
      // (i) is received from Users.js
      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      // (i, name, age) is received from Users.js
      updateUser = (i, name, age) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].age = age;
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // (i) is received from Users.js
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        return(
          // <div className='body'>

          // <div className="box">
            <div className="container">
                <h1>CRUD </h1>
                <Users className="container_users" allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser className="container_AddUser" addUser={this.addUser}/>
            </div>
          // </div>
          // </div>
        );
    }
}

export default App;