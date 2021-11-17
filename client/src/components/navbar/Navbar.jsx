import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"
import logo from "../../components/images/logo.png";

function Navbar() {
    return (
        <div className="navdiv">
                <div className="top-header-area" id="sticker">
                <nav class="navbar navbar-expand-md">
                <a class="navbar-brand ml-3 pl-5" href="#"><img src={logo} alt="image" className="rounded-circle" width="60px" height="60px"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="">About</Link>  </li>
                        <li class="nav-item">
                            <Link to="">Our Services</Link>  </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/login">Login</Link>  </li>
                        <li class="nav-item mr-5 pr-5">
                            <Link to="/register">Register</Link>  </li>
                    </ul>
                </div>
            </nav>
                </div>
          

           
        </div >
    )
}

export default Navbar
