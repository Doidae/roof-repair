import React from 'react';
import './styles/Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className='navbar'>
            <div>
            <NavLink exact to='/' activeClassName='active' className='navbar-link'> Home </NavLink>
            <NavLink eact to='/AboutUs' activeClassName='active' className='navbar-link'> About Us</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;