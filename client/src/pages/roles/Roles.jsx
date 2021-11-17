import React from 'react'
import { Link } from "react-router-dom"
import "./roles.css"
function Roles() {
    return (
        <div className="main-div">
            <center>
                <Link to="/user" className="btn"><button type="button" class="btn btn-success">User</button></Link>

                <Link to="/volunteer" className="btn"><button type="button" class="btn btn-success">Volunteer</button></Link>
                <Link to="/recycler" className="btn"><button type="button" class="btn btn-success">Recyler</button></Link>
            </center>
        </div>
    )
}

export default Roles
