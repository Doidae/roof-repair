import React from 'react';
import './styles/Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <a class="navbar-brand" href="#">Navbar</a>
            <div class="navbar-nav">
                <NavLink exact to='/' activeClassName='active' className="nav-link" > Home </NavLink>
                <NavLink exact to='/AboutUs' activeClassName='active' className="nav-link"> About Us </NavLink>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;