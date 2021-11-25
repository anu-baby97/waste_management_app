import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AdminNav from '../../components/admin_nav/Admin_nav';
import axios from "axios"

class Admin_payment_summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "arrOfData": [
                // {
                //     "name": "asdf",
                //     "location": "Calicut",
                //     "waste_type": "Bio Waste",
                //    "bin_name": "bin107",
                //    "place":"Calicut"
                // },
                // {
                //     "name": "asdf",
                //     "location": "Calicut",
                //     "waste_type": "Bio Waste",
                //     "bin_name": "bin119",
                //     "place":"Ekm"
                // }
            ],
        }
    }
    componentDidMount = () => {
        
        this.GetUsersPayment()
    }
    

    GetUsersPayment = () => {


        const url = "http://localhost:4000/waste/user-payment"
        axios.get(url).then((response) => {
            console.log("user payments---", response);
            if (response.data.success == true) {
                this.setState({
                    arrOfData: response.data.user_details
                })
                console.log("==vol data==",this.state.arrOfData)
            }

        }).catch((err) => {
            console.log(err);
        });
    }


    render() {
        return (
            <div className="mb-5 pb-5">
                <AdminNav />
                <h3 id="h1">Payment Summary</h3>
               {this.state.arrOfData.map((item,i)=>{
                   //
                   {item.paymentData.map((item2,)=>{
                       console.log("--item2--",item2)
                       return ( <div className="adminmanaguserdiv">
                       <h4 key={i}>Amount: {item2?.amount}</h4>
                              <h5 key={i}>{item.username}</h5>
                              <p key={i}>{item.waste_type}</p>
                          <a href=""  style={{textDecoration:"none"}}><button type="button" id="del" class="btn btn-success">Delete</button></a>
                       </div>)
                   })}
                
                       
               })}
               
                
            </div>
        )
    }
}

export default Admin_payment_summary
