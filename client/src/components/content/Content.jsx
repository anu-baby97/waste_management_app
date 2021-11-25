import React, { Component } from 'react'
import "./content.css"
import { Link } from "react-router-dom"

class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            documentname:"",
            token:"",
            arrofdata:[
                {

                }
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
        fetch('http://localhost:4000/waste/single-user-payment',{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ id
            },

        }).then(res=>res.json())
        .then((data)=>{
            console.log(data)
            if(data.success==true){
                this.setState({
                    arrofdata:data.user_details[0].WasteData
                })
            }
        })

    }
    checkStatus=(status)=>{
        if(status===0){
            alert("Request Reached to Volunteer")
        }
        else if(status===1){
            alert("Volunteer taking action")
        }
        else if(status===2){
            alert("Recycling processed")
        }
    }
   render(){
       
    return (
        <div >

        {this.state.arrofdata.map((item,i)=>{
            return <div className="content-div mt-5 pt-3 mb-3 pb-2 ">
               <h3 key={i}>{item.type}</h3>
               <h3 key={i}>{item.quantity}</h3>
            <Link to="/bin-status"><button type="button" id="status" class="btn btn-success" onClick={()=>this.checkStatus(item.status)} style={{width:"100px",float:"left", backgroundColor:"#6ECB63"}}>Status</button></Link>
        </div>
        })}
            
           

        </div>

    )
   }
}

export default Content
