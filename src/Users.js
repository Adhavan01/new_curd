import React, { Component} from 'react';


class Users extends Component{

    // call updateUser (App.js)
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.name.value, this.age.value);
    }

    render(){

        const {allUsers, pressEditBtn, pressDelete} = this.props;

        // const handleClick = async () => {
        //     setIsLoading(true);
        //     try {
        //       const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1', {
        //         headers: {
        //           Accept: 'application/json',
        //         },
        //       });
        
        //       console.log('data is: ', JSON.stringify(data, null, 4));
        
        //       setData(data);
        //     } catch (err) {
        //       setErr(err.message);
        //     } finally {
        //       setIsLoading(false);
        //     }
        //   };
        

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (
                
                <tr  key={index}>
                    <td><input  className='input' type="text" ref={(val) => {this.name = val}} required defaultValue={user.name}/></td>
                    <td><input className='input' type="number" ref={(val) => {this.age = val}} required defaultValue={user.age}/></td>
                    <td>
                    <input  type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btnAdd input"/>
                    </td>
                </tr>  

            ) : (

                <tr  key={index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td ><button className="btnAkEdit" onClick={() => pressEditBtn(index)}><span>Edit</span><i className='ff'></i></button>     |      <button className="btnAk" onClick={()=>pressDelete(index)}><span>Delete</span><i className='ff'></i></button></td>
                </tr>

            );
        });

        return(
            <table className="striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        );
    }
}

export default Users;