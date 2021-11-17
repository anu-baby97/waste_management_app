import { Component } from "react";
import Header from "../../components/header/Header";
import "./register.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            userDataReg:
            {
                name:props.name,
                address:props.address,
                number:props.number,
                uname:props.uname,
                pass:props.pass,
            }
        }
    }
    handleName(event){
        var userDataReg= this.state.userDataReg;
        userDataReg.name=event.target.value;
        this.setState({userDataReg:userDataReg})
    }
    handleAddress(event){
        var userDataReg= this.state.userDataReg;
        userDataReg.address=event.target.value;
        this.setState({userDataReg:userDataReg})
    }
    handleNumber(event){
        var userDataReg= this.state.userDataReg;
        userDataReg.number=event.target.value;
        this.setState({userDataReg:userDataReg})
    }
    handleUname(event){
        var userDataReg= this.state.userDataReg;
        userDataReg.uname=event.target.value;
        this.setState({userDataReg:userDataReg})
    }
    handlePass(event){
        var userDataReg= this.state.userDataReg;
        userDataReg.pass=event.target.value;
        this.setState({userDataReg:userDataReg})
    }
    handleRegister(){
        if(this.state.userDataReg.name==null){
            toast.warning('Please fill your name',{autoClose:60000})
        }
        else if(this.state.userDataReg.address==null){
            toast.warning("Please fill your address",{autoClose:60000})
        }
        else if(this.state.userDataReg.number==null){
            toast.warning("Please fill your phone number",{autoClose:60000})
        }
        else if(this.state.userDataReg.uname==null){
            toast.warning("Please fill your user name",{autoClose:60000})
        }
        else if(this.state.userDataReg.pass==null){
            toast.warning("Please fill your password",{autoClose:60000})
        }
        else{
            console.log(this.state.userDataReg.name);
            console.log(this.state.userDataReg.address);
            console.log(this.state.userDataReg.number);
            console.log(this.state.userDataReg.uname);
            console.log(this.state.userDataReg.pass);
        }
    }

   render(){
    return (
        <div>
            <Header />
            
            <div className="regdiv pb-5">
                <br />
                <form action="" className="ui form pt-5"  id="formdiv">
                    Name:
                    <input type="text" className="ui input mb-3" name="name" value={this.state.userDataReg.name} onChange={this.handleName.bind(this)} />

                    Address:
                    <input type="email" className="ui input mb-3" name="address" value={this.state.userDataReg.address}  onChange={this.handleAddress.bind(this)}/>
                    
                    Phone Number:
                    <input type="text" className="ui input mb-3" name="phno" value={this.state.userDataReg.number} onChange={this.handleNumber.bind(this)}/>
                    User Name:
                    <input type="text" className="ui input mb-3" name="uname" value={this.state.userDataReg.uname} onChange={this.handleUname.bind(this)}/>
                    Password: <input type="password" name="pass" className="ui input mb-3" value={this.state.userDataReg.pass} onChange={this.handlePass.bind(this)}/>
                    Select your Role:
                        <select name="roles" id="roles" className="mt-3">
                            <option value="user">User</option>
                            <option value="vol">Volunteer</option>
                            <option value="recy">Recycler</option>
                           
                        </select> 
                    <div className="mt-3 pt-1 text-center"><button className="log-button" onClick={this.handleRegister.bind(this)}>Register</button><br /></div>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
   }
   
}

export default Register;
