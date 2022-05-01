import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>

            <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? 'selected' : 'unselected')}
            >
                Home
            </NavLink>
            <NavLink
                to="/inventories"
                className={({ isActive }) => (isActive ? 'selected' : 'unselected')}
            >
                Stock
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'selected' : 'unselected')}
            >
                About
            </NavLink>
            <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'selected' : 'unselected')}
            >
                Login
            </NavLink>

        </div>
    );
};

export default Header;