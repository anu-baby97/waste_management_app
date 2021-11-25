import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AdminNav from '../../components/admin_nav/Admin_nav';
import axios from "axios"

class Admin_manage_volunteer extends Component {
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
            VolData:[]
        }
    }
    componentDidMount = () => {
        
        this.GetVolunteer()
    }
    

    GetVolunteer = () => {


        const url = "http://localhost:4000/volunteer/view-volunteers"
        axios.get(url).then((response) => {
            console.log("volunteers---", response);
            if (response.data.success == true) {
                this.setState({
                    arrOfData: response.data.details
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
                <h3 id="h1">Manage Volunteer</h3>
               {this.state.arrOfData.map((item,i)=>{
                 return <div className="adminmanaguserdiv">
                 <h4 key={i}>{item?.RegisterDetails[0]?.name}</h4>
                        <h5 key={i}>{item?.RegisterDetails[0]?.phone}</h5>
                        <p key={i}>{item?.RegisterDetails[0]?.address}</p>
                    <a href=""  style={{textDecoration:"none"}}><button type="button" id="del" class="btn btn-success">Delete</button></a>
                 </div>
                       
               })}
               
                
            </div>
        )
    }
}

export default Admin_manage_volunteer
