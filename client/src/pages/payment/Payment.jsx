import React from 'react'
import { Link } from "react-router-dom"
import "./payment.css"

function Payment() {
    return (
        <div className="paydiv">
            <form action="" className="ui form pt-5" id="form">

                Enter Card Number:
                <input type="number" className="ui input mb-3"/>

                Expiry Date: <input type="date" className="ui input mb-3 "  />
                CVV: <input type="number" className="ui input mb-3 "  />
                Card Holder Name: <input type="text" className="ui input mb-3 "  />

                
                <div className="text-center"><br /><Link to="/"><button className="log-button">Submit</button></Link></div>
            </form>
        </div>
    )
}

export default Payment
