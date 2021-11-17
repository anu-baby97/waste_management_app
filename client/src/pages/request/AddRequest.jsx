import React from 'react'
import "./request.css"
import { Link } from "react-router-dom"
import Usernav from '../../components/usernav/Usernav'

function AddRequest() {
    return (
        <div>
            <Usernav />
            <div className="reqdiv">
                <br />
                <form action="" className="ui form pt-5" id="form-div">

                    Name:
                    <input type="email" className="ui input mb-3" />

                    Phone Number: <input type="password" className="ui input mb-3 " />
                    <select name="type" id="type" className="mt-4">
                        <option value="types">Choose Waste Type:</option>
                        <option value="Metal">Metal</option>
                        <option value="Paper">Paper</option>
                        <option value="Food">Food</option>
                        <option value="Plastic">Plastic</option>
                    </select>
                    <select name="quantity" id="quantity" className="mt-4 ">
                        <option value="quantities">Choose Quantity Type:</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <div className="mt-3 pt-1 text-center"><br /><Link to="/payment"><button className="log-button">Add Request</button></Link></div>
                </form>
            </div>
        </div>
    )
}

export default AddRequest
