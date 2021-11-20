import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./payment.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDataReg:
            {
                cardnumber: props.name,
                expirydate: props.address,
                cvv: props.cvv,
                holdername:props.holdername
            }
        }
    }
    handleHolderName(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.holdername = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handleExpiryDate(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.expirydate = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handleCvv(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.cvv = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handleCardNumber(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.cardnumber = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
   
   
    handleSubmit() {
        if (this.state.userDataReg.cardnumber == null) {
            toast.warning("Please fill your name", { autoClose: 5000, theme: "dark" })
        }
        else if (this.state.userDataReg.expirydate == null) {
            toast.warning("Please fill your address", { autoClose: 5000 })
        }
        else if (this.state.userDataReg.cvv == null) {
            toast.warning("Please fill your phone number", { autoClose: 5000 })
        }
        else if (this.state.userDataReg.holdername == null) {
            toast.warning("Please fill your user name", { autoClose: 5000 })
        }
       
        else {
            console.log(this.state.userDataReg.holdername);
            console.log(this.state.userDataReg.cvv);
            console.log(this.state.userDataReg.cardnumber);
            console.log(this.state.userDataReg.expirydate);
           

            const url = "http://localhost:4000/register/registerdata"
            const data = {
                cardnumber: this.state.userDataReg.holdername,
                expirydate: this.state.userDataReg.cvv,
                cvv: this.state.userDataReg.cardnumber,
                holdername: this.state.userDataReg.expirydate,
            }
            const header = {
                'Content-Type': 'application/json',

            }

            console.log("data--",data)
            axios.post(url, data, header).then((response) => {
                console.log(response);
                if (response.data.success === true) {
                    this.setState({
                        result_message: response.data.message
                    })
                    alert(this.state.result_message)
                    this.props.history.push('/')
                }
                else {
                    alert("Payment Failed")
                }
            })
                .catch(function (err) {
                    console.log(err)
                })

        }
    }
    render(){
        return (
            <div className="paydiv">
                <form action="" className="ui form pt-5" id="form" >
    
                    Enter Card Number:
                    <input type="number" className="ui input mb-3" value={this.state.userDataReg.cardnumber} onChange={this.handleCardNumber.bind(this)}/>
    
                    Expiry Date: <input type="date" className="ui input mb-3 " value={this.state.userDataReg.expirydate} onChange={this.handleExpiryDate.bind(this)} />
                    CVV: <input type="number" className="ui input mb-3 " value={this.state.userDataReg.cvv} onChange={this.handleCvv.bind(this)} />
                    Card Holder Name: <input type="text" className="ui input mb-3 " value={this.state.userDataReg.holdername} onChange={this.handleHolderName.bind(this)}  />
    
                    
                    <div className="text-center"><br /><Link to="/"><button className="log-button" onClick={this.state.props.handleSubmit.bind(this)}>Submit</button></Link></div>
                </form>
            </div>
        )
    }
}

export default Payment
