import React from 'react';
import { Link } from "react-router-dom";


class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="card">
            <div className="card-header">
                Empleados
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                      <label htmlFor="">Name:</label>
                      <input type="text" name="name" id="name" className="form-control" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write user name:</small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Email:</label>
                      <input type="text" name="email" id="email" className="form-control" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write user email:</small>
                    </div>

                    <div className="btn-group" role="group" aria-label="">
                        <button type="submit" className="btn btn-success">Add new user</button>
                        <Link to={"/"} className="btn btn-primary">Cancel</Link>
                        
                    </div>



                </form>

            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>);
    }
}
 
export default Create;