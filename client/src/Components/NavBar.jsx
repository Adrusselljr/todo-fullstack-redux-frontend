import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar() {
    return (
        <div className='App'>

            <div className='navbar'>
                <Link to="/" className='btn btn-primary'>Home</Link>
                <Link to="task" className='btn btn-primary'>Task</Link>
            </div>

            <Outlet />
        </div>
    )
}

export default NavBar