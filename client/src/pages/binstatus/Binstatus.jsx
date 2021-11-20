import React, { Component } from 'react'
import Volnav from '../../components/volnav/Volnav'
import "./binstatus.css"
class Binstatus extends Component {
   render(){
    return (
        <div>
            <Volnav/>
            
            <div className="bindiv" >
            <h5>Bin Status:</h5>
            <div className="subdiv">

            </div>
            </div>
        </div>
    )
   }
}

export default Binstatus
