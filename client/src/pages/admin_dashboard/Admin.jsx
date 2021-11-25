import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AdminNav from '../../components/admin_nav/Admin_nav';
import "./admin.css"
import axios from "axios"

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "arrOfData": [
                {
                    "name": "asdf",
                    "location": "Calicut",
                    "waste_type": "Bio Waste",
                   "bin_name": "bin107",
                   "place":"Calicut"
                },
                {
                    "name": "asdf",
                    "location": "Calicut",
                    "waste_type": "Bio Waste",
                    "bin_name": "bin119",
                    "place":"Ekm"
                }
            ]
        }
    }
    componentDidMount = () => {
        const documentdata = JSON.parse(localStorage.getItem('logindata'))
        const sessiondata = JSON.parse(sessionStorage.getItem('isloggedin'))
        console.log("Login data---", documentdata)
        console.log("Session data---", sessiondata)

        this.GetBin()
    }
    

    GetBin = () => {


        const url = "http://localhost:4000/bin/view-bin"
        axios.get(url).then((response) => {
            console.log("view bin---", response);
            if (response.data.success == true) {
                this.setState({
                    arrOfData: response.data.details
                })
            }

        }).catch((err) => {
            console.log(err);
        });
    }

    DeleteBin = (id) => {
        console.log("bin_id",id)

        const url="http://localhost:/4000/bin/delete"+id
        console.log("url",url)
        axios.get(url)
        .then((response)=>{
            console.log("delete bin===",response)
            if(response.data.success==true){
                this.setState({
                    message:response.data.message
                })
                alert(this.state.message)
                this.GetBin()
            }
        }).catch((err)=>{
            console.log(err)
        });
    }

    render() {
        return (
            <div className="admindiv mb-5 pb-5">
                <AdminNav />
                <h3 id="h1">Waste Bin Monitoring</h3>
                <a href="/admin-add-bin" style={{textDecoration:"none"}}><button type="button" id="add" class="btn btn-success">Add waste Bin</button></a>
               
               {this.state.arrOfData.map((item,i)=>{
                   return <div className="admindashdiv">
                       <h4 key={i}>{item.bin_name}</h4>
                       <h5 key={i}>{item.place}</h5>
                   <a href="" onClick={()=>this.DeleteBin(item._id)} style={{textDecoration:"none"}}><button type="button" id="del" class="btn btn-success">Delete</button></a>
                   </div>
               })}
               
                
            </div>
        )
    }
}

export default Admin
