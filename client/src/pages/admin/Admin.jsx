import React from 'react'
import { Link } from "react-router-dom";
import "./admin.css"
function Admin() {
    return (
        <div className="admindiv">
            <Link to="/userdetails" className="btn"><button type="button" class="btn btn-success">Get User Details</button></Link>

            <Link to="/volunteerdetails" className="btn"><button type="button" class="btn btn-success">Get Volunteer Details</button></Link>
            <Link to="/recyclerdetails" className="btn"><button type="button" class="btn btn-success">Get Recyler Details</button></Link>
        </div>
    )
}

export default Admin
