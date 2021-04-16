
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import List from "./componentes/List";
import Create from "./componentes/Create";
import Edit from "./componentes/Edit";

function App() {
  return (

    <Router>
       <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to={"/"}>List <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to={"/Create"}>Create</Link>
              <Link className="nav-item nav-link" to={"/Edit"}>Edit</Link>
          </div>
      </nav>
      <br></br>

    <div className="container">
     
     <Route exact path="/" component={List}></Route>
     <Route path="/Create" component={Create}></Route>
     <Route path="/Edit" component={Edit}></Route>
   
    </div>
    </Router>
  );
}

export default App;
