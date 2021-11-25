import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AdminNav from '../../components/admin_nav/Admin_nav';
import axios from "axios"


const sampleJSON = {
    "arrOfData": [
        {
            "name": "asdf",
            "location": "Calicut",
            "waste_type": "Bio Waste",
            "bin_name": "bin107",
            "place": "Calicut"
        },
        {
            "name": "asdf",
            "location": "Calicut",
            "waste_type": "Bio Waste",
            "bin_name": "bin119",
            "place": "Ekm"
        }
    ]
}

class Admin_waste_monitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {

        const documentdata = JSON.parse(localStorage.getItem('logindata'))
        const sessiondata = window.sessionStorage.getItem('isloggedin')
        console.log("Login data---", documentdata)
        console.log("Session data---", sessiondata)
    }

    render() {
        return (
            <div className="mb-5 pb-5">
                <AdminNav />
                <h3 id="h1">Waste Bin Monitoring</h3>
                <a href="/admin-add-bin" class="btn" style={{ backgroundColor: "green", color: "white", marginLeft: 33 }}>Add Waste Bin</a>
                {sampleJSON.arrOfData.map((item, i) => {
                    return <div className="adminmanaguserdiv">
                        <h4 key={i}>{item.name}</h4>
                        <h5 key={i}>{item.location}</h5>
                        <p key={i}>{item.waste_type}</p>
                        <a href="#" style={{ textDecoration: "none" }}><button type="button" id="del" class="btn btn-success">Delete</button></a>
                    </div>

                })}


            </div>
        )
    }
}

export default Admin_waste_monitoring
