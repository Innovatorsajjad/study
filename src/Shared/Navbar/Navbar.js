import React from 'react';
import { Link,  } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='sticky top-0 z-30'>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="text-blue-800 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"courses"}>Courses</Link></li>
                        <li><Link to={"event"}>Event</Link></li>
                        <li><Link to={"gallery"}>Gallery</Link></li>
                        <li><Link to={"pages"}>Pages</Link></li>
                        <li><Link to={"news"}>News</Link></li>
                        <li><Link to={"contact"}>Contact</Link></li>
                        
                        </ul>
                    </div>
                    <Link to={""} className="btn btn-ghost normal-case text-xl"><img src="https://htmldemo.net/study/study/img/logo/logo.png" alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-blue-900">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"courses"}>Courses</Link></li>
                        <li><Link to={"event"}>Event</Link></li>
                        <li><Link to={"gallery"}>Gallery</Link></li>
                        <li><Link to={"pages"}>Pages</Link></li>
                        <li><Link to={"news"}>News</Link></li>
                        <li><Link to={"contact"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;