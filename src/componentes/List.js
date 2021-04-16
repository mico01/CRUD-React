
import React from 'react';

import { Link } from "react-router-dom";

class  List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataLoaded: false,
            users: []
        }
    }

    loadDB(){

        fetch("https://jsonplaceholder.typicode.com/users")    //get info to api
        .then(answer=>answer.json())
        .then((dataAnswer)=>{
            console.log(dataAnswer);
            this.setState({ dataLoaded:true, users:dataAnswer })
        })
        .catch(console.log)

    }

    componentDidMount(){
        this.loadDB();
    }

    render() { 

        const{dataLoaded, users}=this.state
        if(!dataLoaded){
            return (<div>Loading...</div>)
            }
            else { 
            
        return ( 
       
       <table className="table">
       <thead>
           <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Mail</th>
               <th>Actions</th>
           </tr>
       </thead>
       <tbody>
            {users.map(
                (user)=>(
            <tr key={user.id}>
               <td>{user.id}</td>
               <td>{user.name}</td>
               <td>{user.email}</td>
               <td>
                   <div className="btn-group" role="group" aria-label="">
                    <Link className="btn btn-primary" to={"/edit"}>Edit</Link>
                    <button type="button" className="btn btn-warning">Delete</button>                     
                   </div>
                </td>

            </tr>  
                )
            )}

        
         
       </tbody>
   </table> );

            }

           

    }
}
 
export default List;