import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"
import logo from "../../components/images/logo.png";
import logo1 from "../../components/images/logo1.jpg"

function Navbar() {
    return (
        <div className="navdiv">
            <div className="top-header-area" id="sticker">
                <nav class="navbar navbar-expand-md">
                    <a class="navbar-brand ml-3 pl-5" href="/" style={{ color: "#B1E693", fontSize: "25px", fontWeight: "700" }}><img src={logo1} alt="image" className="rounded-circle mr-2" width="50px" height="50px" /> GOGREEN</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                            <a href="/" style={{ textDecoration: "none" }}> <li class="nav-item">
                                <Link to="/">HOME</Link>
                            </li></a>
                            <a href="/" style={{ textDecoration: "none" }}> <li class="nav-item">
                                <Link to="">ABOUT</Link>  </li></a>
                            <a href="/" style={{ textDecoration: "none" }}>  <li class="nav-item">
                                <Link to="">OUR SERVICES</Link>  </li></a>
                        </ul>
                        <ul class="navbar-nav">
                            <a href="/login" style={{ textDecoration: "none" }}>  <li class="nav-item">
                                <Link to="/login">LOGIN</Link>  </li></a>
                            <a href="/register" style={{ textDecoration: "none" }}> <li class="nav-item mr-5 pr-5">
                                <Link to="/register">REGISTER</Link>  </li></a>
                        </ul>
                    </div>
                </nav>
            </div>



        </div >
    )
}

export default Navbar
