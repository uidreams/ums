import React from 'react'
import {
    Link
  } from "react-router-dom";

function NavLinks() {
    return (
        <div>
            
                <h2>Home</h2>
                <h2>User management</h2>
                <ul>
                    <li><Link to="/addUser">Add user</Link></li>
                    <li><Link to="/deleteUser">Delete user</Link></li>
                    <li><Link to="/updateUser">Update user</Link></li>
                </ul>
                <h2>Customer management</h2>
                <ul>
                    <li><Link to="/assignCustomer">Assign customer to user</Link></li>
                </ul>
        </div>
    )
}

export default NavLinks