import React from 'react'
import { Link } from "react-router-dom"
import logo from '../../components/images/logo.png'
import Volnav from '../../components/volnav/Volnav'

function Volunteer() {
    return (
        <div>
           
        <Volnav/>
            <div className="content-div ">
                <h5>Calicut</h5>
                <h5>6747568435</h5>
                <h5>Bio Waste</h5>
                <h5>Medium</h5>
                <Link to="/"><button type="button" class="btn btn-success" style={{ width: "200px", float: "left" }}>Accept Request</button></Link>
            </div>

        </div>
    )
}

export default Volunteer
