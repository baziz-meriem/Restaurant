import React from 'react';

import { FaPizzaSlice} from 'react-icons/fa';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import LOGO from '../../images/gericht.png';

const Navbar = ()=>(
    <nav className='app_navbar'>
        <div className="app__navbar-logo">
            <img src={LOGO} alt="logo"/>
        </div>
        <ul className="app__navbar-links" >
            <li className="p__opensans"><a href="#" >Home</a></li>
            <li className="p__opensans"><a href="#" >About</a></li>
            <li className="p__opensans"><a href="#" >Menu</a></li>
            <li className="p__opensans"><a href="#" >Contact</a></li>
            <li className="p__opensans"><a href="#" >Contact</a></li>
        </ul>
        <div className="app__navbar-login">
            <a href="#login" className="p__opensans" >Log In/Register</a>
        </div>
        <div className="app_navbar-smallscreen">
            <FaPizzaSlice clor="#fff fontSize={27}" className="overlay__close" onClick={ ()=>{} } />
            <div className="app__navbar-smalscreen_overlay flex__center slide-bottom">
            <ul className="app_navbar-smallscreen-links" >
                <li className="p__opensans"><a href="#" >Home</a></li>
                <li className="p__opensans"><a href="#" >About</a></li>
                <li className="p__opensans"><a href="#" >Menu</a></li>
                <li className="p__opensans"><a href="#" >Contact</a></li>
                <li className="p__opensans"><a href="#" >Contact</a></li>
            </ul>
            </div>
            
        </div>
       
    </nav>
);
export default Navbar;