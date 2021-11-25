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
                holdername: props.holdername,
                amount:props.amount

            },

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


    handleButtonClicked(e) {
        e.preventDefault()

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

            const params={
                type:this.props.location.state.type,
                quantity:this.props.location.state.quantity,
                amount:this.state.amount
            }
            const  headers={
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ this.state.token
            }
            console.log("params--",params)
            // fetch('http://localhost:4000/waste/add',{
            //     method:'POST',
            //     body:JSON.stringify(params),
            //     headers:{
            //         'Content-Type':'application/json',
            //         'Authorization':'Bearer '+ this.state.token
            //     },
            // })
            axios.post('http://localhost:4000/waste/add',params,headers)
            .then(res=> res.json())
            .then((data)=>
            {
                console.log("Result---",data);
                
                if(data.success==true){
                    this.setState({
                        message:data.message
                        
                    })
                    alert(this.state.message)
                    this.props.history.push('/user')
                }
                else{
                    alert("Payment Not Completed")
                }
            }); 

        }
    }

    componentDidMount(){
        const documentdata=JSON.parse(localStorage.getItem('logindata'))
        const sessiondata=window.sessionStorage.getItem('isloggedin')
        console.log("Login data---",documentdata)
        console.log("Session data---",sessiondata)
        this.setState({
            token:documentdata.token
        })
        console.log("waste type---",this.props.location.state.type)
        console.log("quantity type---",this.props.location.state.quantity)

        if(this.props.location.state.quantity==="low"){
            this.setState({
                amount:"30"
            })
        }
        else if(this.props.location.state.quantity==="medium"){
            this.setState({
                amount:"60"
            })
        }
        else if(this.props.location.state.quantity==="high"){
            this.setState({
                amount:"100"
            })
        }

    }



   
    render() {
        return (
            <div className="paydiv">
                <form action="" className="ui form pt-5" id="form" onSubmit={this.handleButtonClicked.bind(this)}  >

                    Card Number:
                    <input type="number" className="ui input mb-3" placeholder="Enter Card Number" value={this.state.userDataReg.cardnumber} onChange={this.handleCardNumber.bind(this)} />
                    
                    Card Holder Name: <input type="text" className="ui input mb-3 " placeholder="Enter Name on Card" value={this.state.userDataReg.holdername} onChange={this.handleHolderName.bind(this)} />
                    <div style={{ float: "left", display: "block" }} >
                    
                    CVV: <br /> <input type="number" className="ui input mb-3 " placeholder="Enter CVV" style={{ width: "100%" }} value={this.state.userDataReg.cvv} onChange={this.handleCvv.bind(this)} />
                    </div>
                    <div style={{ float: "left", display: "block", marginLeft: "83px" }}>
                    
                    Expiry Date: <br /> <input type="date" className="ui input mb-3 " style={{ width: "100%" }} value={this.state.userDataReg.expirydate} onChange={this.handleExpiryDate.bind(this)} />
                    </div>
                    Amount: <input type="text" value={this.state.amount} readOnly />


                    <div className="text-center mt-5 pt-5"><br /><button type="submit" className="btn btn-success">Submit</button></div>
                </form>
            </div>
        )
    }
}

export default Payment
