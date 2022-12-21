import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItem = <>
    <li><Link to='/'>Layout1</Link></li>
    <li><Link to='/layout2'>layout2</Link></li>
    <li><Link to='/layout3'>Layout3</Link></li>
    
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
          <ul className="menu menu-horizontal px-1">
            {menuItem}
          </ul>
        </div>
        
      </div>
    );
};

export default Header;