import React, { Component } from 'react'
import "./request.css"
import { Link } from "react-router-dom"
import Usernav from '../../components/usernav/Usernav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import PersonIcon from '@material-ui/icons/Person';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import img3 from "../../components/images/bg2.jpg"

class AddRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDataReg:
            {
                name: props.name,
                phone: props.phone,
                type: props.type,
                quantity: props.quantity
            }
        }
    }
    handleQuantityChanged(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.quantity = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handlePhoneChanged(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.phone = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handleNameChanged(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.name = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handleTypeChanged(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.type = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handleButtonClicked(e) {
        e.preventDefault();

        if (this.state.userDataReg.name == null) {
            toast.warning("Please fill your name", { autoClose: 5000, theme: "dark" })
        }

        else if (this.state.userDataReg.phone == null) {
            toast.warning("Please fill your phone number", { autoClose: 5000 })
        }
        else if (this.state.userDataReg.type == null) {
            toast.warning("Please fill the waste type", { autoClose: 5000 })
        }
        else if (this.state.userDataReg.quantity == null) {
            toast.warning("Please fill the quantity of type", { autoClose: 5000 })
        }

        else {
            console.log(this.state.userDataReg.name);
            console.log(this.state.userDataReg.phone);
            console.log(this.state.userDataReg.type);
            console.log(this.state.userDataReg.quantity);

            this.props.history.push({
                pathname:'/payment',
                state:{
                    type:this.state.userDataReg.type,
                    quantity:this.state.userDataReg.quantity
                }
            })

            }
           
           
              
        }
    


    render() {
        return (
            <div>
                <Usernav />
                <div class="main">

                    <section class="signup">
                        <div class="container">
                            <div class="signup-content">
                                <div class="signup-form">
                                    <h2 class="form-title">Add your Request Here</h2>
                                    <form class="register-form" id="register-form" onSubmit={this.handleButtonClicked.bind(this)}>
                                        <div class="form-group">
                                            <label><PersonIcon style={{ fill: "#9CC094", fontSize: "27px" }} /></label>
                                            <input type="text" name="name" placeholder="Enter your Name" style={{ paddingLeft: "40px" }} value={this.state.userDataReg.name} onChange={this.handleNameChanged.bind(this)} />
                                        </div>
                                        <div class="form-group">
                                            <label><LocalPhoneIcon style={{ fill: "#9CC094", fontSize: "27px" }} /></label>

                                            <input type="number" name="phone" placeholder="Enter your Phone Number" value={this.state.userDataReg.phone} onChange={this.handlePhoneChanged.bind(this)} />
                                        </div>
                                        <div class="drop">
                                            <div class="select-box">
                                                <select name="type" id="type" className="mt-4" value={this.state.userDataReg.type} onChange={this.handleTypeChanged.bind(this)}>
                                                    <option value="types">Choose Waste Type:</option>
                                                    <option value="Metal">Metal</option>
                                                    <option value="Paper">Paper</option>
                                                    <option value="Food">Food</option>
                                                    <option value="Plastic">Plastic</option>
                                                </select>
                                            </div>

                                        </div>

                                        <div class="drop">
                                            <div class="select-box">

                                                <select name="quantity" id="quantity" className="mt-4 " value={this.state.userDataReg.quantity} onChange={this.handleQuantityChanged.bind(this)}>
                                                    <option value="quantities">Choose Quantity Type:</option>
                                                    <option value="low">Low</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="high">High</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                            <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                                        </div>
                                        <div class="form-group form-button">
                                              <input type="submit" name="signup" id="signup" class="form-submit" value="Add Request"  />
                                        </div>
                                    </form>
                                </div>
                                <div class="signup-image">
                                    <figure><img src={img3} alt="sign up" /></figure>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default AddRequest
