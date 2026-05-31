import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";


 function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" style={{width:"70px"}} className="rounded-pill" />
        </Link>

    <div className="dropdown">
        
    <div className="nav-item dropdown">
    
        <a className= "nav-link dropdown-toggle text-white"  href="/" role="button"  data-bs-toggle="dropdown">Dropdown</a>
        <ul className="dropdown-menu" > 
            <li> <Link className="dropdown-item" to="/">Home</Link></li>
            <li> <Link className="dropdown-item" to="/about">About</Link></li>
            <li> <Link className="dropdown-item" to="/menu">Menu</Link></li>
            <li> <Link className="dropdown-item" to="/contact">Contact</Link></li>
        </ul>
        
    </div>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/menu">Menu</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>

        </div>

    </div>
    </div>
</nav>

    );
 } 
 export default Navbar;

