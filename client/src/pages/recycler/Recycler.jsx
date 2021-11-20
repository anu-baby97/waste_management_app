import React, { Component } from 'react'
import Content from '../../components/content/Content'
import {Link} from "react-router-dom"
import logo from '../../components/images/logo.png'

class Recycler extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
   render(){
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
                                    <Link to="/bin-status">View Requests</Link>
                                </li>

                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/login">Log out</Link>  </li>
                                <li class="nav-item mr-5 pr-5">
                                    <Link to="/register">Recycler:</Link>  </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
            <Content/>
        </div>
    )
   }
}

export default Recycler
