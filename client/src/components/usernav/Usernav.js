import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from '../../components/images/logo.png'
import "./usernav.css"
import axios from 'axios';
import logo1 from "../../components/images/logo1.jpg"



class Usernav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleAddRequest() {
        const url = "http://localhost:4000/user/userdata"
        const data = {
           
        }
        const header = {
            'Content-Type': 'application/json',

        }
        axios.post(url, data, header).then((response) => {
            console.log(response);
            if (response.data.success === true) {
                this.setState({
                    result_message: response.data.message
                })
                alert(this.state.result_message)
                this.props.history.push('/login')
            }
            else {
                alert("Registration Failed")
            }
        })
            .catch(function (err) {
                console.log(err)
            })
    }
    render(){
        return (
            <div>
                <div className="navdiv">
                    <div className="top-header-area" id="sticker">
                        <nav class="navbar navbar-expand-md">
                            <a class="navbar-brand ml-3 pl-5" href="/" style={{color:"#B1E693",fontSize:"25px",fontWeight:"700"}}><img src={logo1} alt="image" className="rounded-circle mr-2" width="50px" height="50px" />GOGREEN</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
                                        <Link to="/add-request" onClick={this.handleAddRequest.bind(this)}>Add Request</Link>
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
}

export default Usernav
