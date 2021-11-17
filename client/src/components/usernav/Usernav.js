import React from 'react'
import { Link } from "react-router-dom"
import logo from '../../components/images/logo.png'
import "./usernav.css"

function Usernav() {
    return (
        <div>
            <div className="navdiv">
                <div className="top-header-area" id="sticker">
                    <nav class="navbar navbar-expand-md">
                        <a class="navbar-brand ml-3 pl-5" href="#"><img src={logo} alt="image" className="rounded-circle" width="60px" height="60px" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <Link to="/add-request">Add Request</Link>
                                </li>

                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/login">Log out</Link>  </li>
                                <li class="nav-item mr-5 pr-5">
                                    <Link to="/register">User:</Link>  </li>
                            </ul>
                        </div>
                    </nav>
                </div>


            </div>

        </div>
    )
}

export default Usernav
