import React from 'react'
import "./content.css"
import { Link } from "react-router-dom"

function Content() {
    return (
        <div >


            <div className="content-div ">
                <h5>Anu</h5>
                <h5>Calicut</h5>
                <h5>6747568435</h5>
                <h5>Food</h5>
                <h5>Medium</h5>
                <Link to="/bin-status"><button type="button" class="btn btn-success" style={{width:"100px",float:"left", backgroundColor:"#6ECB63"}}>Status</button></Link>
            </div>
           

        </div>

    )
}

export default Content
