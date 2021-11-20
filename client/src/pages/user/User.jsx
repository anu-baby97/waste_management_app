import React, { Component } from 'react'
import Content from '../../components/content/Content'
import Usernav from '../../components/usernav/Usernav'

class User extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
        
    }
    
    render(){
        return (
            <div>
                <Usernav/>
                <Content/>
               
            </div>
        )
    }
        
    
}

export default User
