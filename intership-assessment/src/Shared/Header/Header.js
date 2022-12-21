
import React, { useState } from 'react';
import {NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    
    const menuItem = <>
    <li><NavLink to='/'>Layout1</NavLink></li>
    <li><NavLink to='/layout2'>layout2</NavLink></li>
    <li><NavLink to='/layout3'>Layout3</NavLink></li>
    
    </>
    return (
        <div className="navbar">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 navbar-start">
             {menuItem}
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="nav menu-horizontal px-1">
            {menuItem}
          </ul>
        </div>
        
      </div>
    );
};

export default Header;