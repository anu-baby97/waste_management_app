import React, { Component } from 'react'
import UserNavbar from "../../components/usernav/Usernav"
import "./payment_summary.css"

export default class Payment_summary extends Component {
    constructor(props) {
        super(props);
        this.state = {

            documentName: "",
            token: "",

            "arrofData":[
                // {
                //     "name":"asdf",
                //     "location":"Calicut",
                //     "waste_type":"Bio Waste",
                //     "amount":"30"
                // },
                // {
                //     "name":"asdf",
                //     "location":"Calicut",
                //     "waste_type":"Bio Waste",
                //     "amount":"60"
                // }
            ]
        }
    }

    componentDidMount=()=>{
        const documentdata=JSON.parse(localStorage.getItem('logindata'))
        const sessiondata=window.sessionStorage.getItem('isloggedin')
        console.log("Login data---",documentdata)
        console.log("Session data---",sessiondata)


        console.log("====TOKEN====",documentdata?.token,"====NAME=====",documentdata?.cname)//??

        this.GetSinglePayment(documentdata?.token)
    }

    GetSinglePayment=(id)=>{
        console.log("===ID===",id)
        fetch('http://localhost:4000/waste/single-user-payment',{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ id
            },
        }).then(res=>res.json())
        .then((data)=>{
            console.log("====RESULT====",data)
            
            if(data.success==true){
                this.setState({
                    arrofData:data.user_details[0].PaymentData
                })
            }
        });
    }

    render() {
        return (
            <div>
                <UserNavbar />
                <div>
                    {this.state.arrofData.map((item,i)=>{
                        return <div className="payment-summary-div">
                            <h5  key={i}>Amount: {item.amount} </h5>
                        </div>
                    })}
                
            </div>
            </div>
        );
    }
}
