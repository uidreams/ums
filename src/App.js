import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavLinks from './components/layout/NavLinks';
import AddUser from './components/userManagement/AddUser';
import DeleteUser from './components/userManagement/DeleteUser';
import UpdateUser from './components/userManagement/UpdateUser';
import AssignCustomer from './components/customerManagement/AssignCustomer'

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <div className="navlinks">
          <NavLinks/>
        </div>
        <div className="content">
        <Switch>
          <Route exact path="/addUser">
            <AddUser/>
          </Route>
          <Route path="/deleteUser">
            <DeleteUser/>
          </Route>
          <Route path="/updateUser">
            <UpdateUser/>
          </Route>
          <Route path="/assignCustomer">
            <AssignCustomer/>
          </Route>
        </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
