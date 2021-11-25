import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo1 from "../../components/images/logo1.jpg"
import Home from "../../pages/home/Home"
import Navbar from '../../components/navbar/Navbar'
import "./admin_nav.css";


class Admin_nav extends Component {
    render() {
        return (
            <div className="adminnav" >
                <nav class="navbar navbar-expand-lg navbar-light bg-secondary" >
                <a class="navbar-brand " href="/" style={{ color: "#B1E693", fontSize: "20px", fontWeight: "700" }}><img src={logo1} alt="image" className="rounded-circle mr-2" width="30px" height="30px" /> GOGREEN</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" >
                        <ul class="navbar-nav" >
                            <li class="nav-item active" id="adminnavitem">
                                <a class="nav-link" id="navitem" href="admin-manage-volunteers">Manage Volunteers <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active" id="adminnavitem">
                                <a class="nav-link" id="navitem" href="/admin-manage-users">Manage Users</a>
                            </li>
                            <li class="nav-item active" id="adminnavitem">
                                <a class="nav-link" id="navitem" href="admin-payment-summary">Payment Summary</a>
                            </li>
                            <li class="nav-item active" id="adminnavitem">
                                <a class="nav-link" id="navitem" href="#">Manage Recycling</a>
                            </li>
                           
                        </ul>
                        <ul class="navbar-nav">
                        <li class="nav-item active" id="adminnavitem">
                                <a class="nav-link" id="navitem" href="admin-dashboard">Log Out</a>
                            </li>
                        <li class="nav-item active" id="adminnavitem">
                                <a class="nav-link" id="navitem" href="#">Admin</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}
export default Admin_nav
