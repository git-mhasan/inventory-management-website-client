
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';
import hamMenu from '../../.././icon/ham-icon.ico';
import closeIcon from '../../.././icon/close.ico';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(true);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth);
    }

    const hamMenuPop = () => {
        setNavbarOpen(prev => !prev);

    }
    // if (navbarOpen) {
    //     icon = <AccessAlarm icon="menu" color='#ffffff' size='medium' />;
    // } else {
    //     icon = <ThreeDRotation icon="close" color='#ffffff' size='medium' />;
    // }

    return (
        <div className='header-full-container'>
            <div className='header-container'>
                <div onClick={() => { navigate("/") }}>
                    <h2 style={{ color: "orange", cursor: "pointer" }}>Green Tech Electronics</h2>
                </div>
                <div className={navbarOpen
                    ?
                    'header-menu'
                    :
                    'header-menu-closed'}>

                    <NavLink
                        to="/home"
                        className={({ isActive }) => (isActive ? 'selected menuItem' : 'unselected menuItem')}
                    >
                        Home
                    </NavLink>
                    {/* <NavLink
                        to="/inventories"
                        className={({ isActive }) => (isActive ? 'selected menuItem' : 'unselected menuItem')}
                    >
                        Stock
                    </NavLink> */}
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? 'selected menuItem' : 'unselected menuItem')}
                    >
                        About
                    </NavLink>
                    {
                        !user
                            ?
                            <NavLink
                                to="/login"
                                className={({ isActive }) => (isActive ? 'selected menuItem' : 'unselected menuItem')}
                            >
                                Login
                            </NavLink>
                            :
                            <>
                                <NavLink
                                    to="/inventories"
                                    className={({ isActive }) => (isActive ? 'selected menuItem' : 'unselected menuItem')}
                                >
                                    Manage Inventories
                                </NavLink>
                                <NavLink
                                    to="/addnew"
                                    className={({ isActive }) => (isActive ? 'selected menuItem' : 'unselected menuItem')}
                                >
                                    Add Item
                                </NavLink>
                                <NavLink
                                    to="/myitems"
                                    className={({ isActive }) => (isActive ? 'selected menuItem' : 'unselected menuItem')}
                                >
                                    My items
                                </NavLink>
                                <NavLink
                                    to="/"
                                    onClick={handleSignOut}
                                    className={({ isActive }) => (isActive ? 'selected menuItem' : 'unselected menuItem')}
                                >
                                    Logout
                                </NavLink>
                            </>
                    }

                </div>

                <button className='ham-button' onClick={hamMenuPop}> {
                    navbarOpen
                        ?
                        <img style={{ height: "28px" }} src={hamMenu} alt="" />
                        :
                        <>
                            <img style={{ height: "30px" }} src={closeIcon} alt="" />
                        </>

                } </button>
            </div>
        </div>

    );
};

export default Header;