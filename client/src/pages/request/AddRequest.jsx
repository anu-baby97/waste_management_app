import React, { Component } from 'react'
import "./request.css"
import { Link } from "react-router-dom"
import Usernav from '../../components/usernav/Usernav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';

class AddRequest extends Component {
    constructor(props){
        super(props);
        this.state={
            userDataReg:
            {
                name: props.name,
                phno: props.phno,
                waste: props.waste,
                quantity:props.quantity
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
        userDataReg.phno = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handleNameChanged(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.name = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handleWasteChanged(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.waste = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
   handleButtonClicked(){
    if (this.state.userDataReg.name == null) {
        toast.warning("Please fill your name", { autoClose: 5000, theme: "dark" })
    }
    
    else if (this.state.userDataReg.phno == null) {
        toast.warning("Please fill your phone number", { autoClose: 5000 })
    }
    else if (this.state.userDataReg.waste == null) {
        toast.warning("Please fill the waste type", { autoClose: 5000 })
    }
    else if (this.state.userDataReg.quantity == null) {
        toast.warning("Please fill the quantity of waste", { autoClose: 5000 })
    }
    
    else {
        console.log(this.state.userDataReg.name);
        console.log(this.state.userDataReg.phno);
        console.log(this.state.userDataReg.waste);
        console.log(this.state.userDataReg.quantity);

        const url = "http://localhost:4000/request/requestdata"
        const data = {
            name: this.state.userDataReg.name,
            phno: this.state.userDataReg.phno,
            waste: this.state.userDataReg.waste,
            quantity: this.state.userDataReg.quantity,
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
                this.props.history.push('/user')
            }
            else {
                alert("Add Request Failed")
            }
        })
            .catch(function (err) {
                console.log(err)
            })

    }
}

   render(){
    return (
        <div>
            <Usernav />
            <div className="reqdiv">
                <br />
                <form action="" className="ui form pt-5" id="form-div">

                    Name:
                    <input type="text" name="name" className="ui input mb-3" value={this.state.userDataReg.name} onChange={this.handleNameChanged.bind(this)}/>

                    Phone Number: <input type="number" name="phno" className="ui input mb-3 " value={this.state.userDataReg.phno} onChange={this.handlePhoneChanged.bind(this)} />
                    <select name="waste" id="type" className="mt-4" value={this.state.userDataReg.waste} onChange={this.handleWasteChanged.bind(this)}>
                        <option value="types">Choose Waste Type:</option>
                        <option value="Metal">Metal</option>
                        <option value="Paper">Paper</option>
                        <option value="Food">Food</option>
                        <option value="Plastic">Plastic</option>
                    </select>
                    <select name="quantity" id="quantity" className="mt-4 " value={this.state.userDataReg.quantity} onChange={this.handleQuantityChanged.bind(this)}>
                        <option value="quantities">Choose Quantity Type:</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <div className="mt-3 pt-1 text-center"><br /><Link to="/payment"><button className="log-button" onClick={this.handleButtonClicked.bind(this)}>Add Request</button></Link></div>
                </form>
            </div>
        </div>
    )
   }
}

export default AddRequest
