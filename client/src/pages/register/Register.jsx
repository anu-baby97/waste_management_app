import { Component } from "react";
import Header from "../../components/header/Header";
import "./register.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

toast.configure();
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDataReg:
            {
                name: props.name,
                address: props.address,
                phone: props.phone,
                username: props.username,
                password: props.password,
                role: props.role,
            }
        }
    }
    handleName(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.name = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handleAddress(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.address = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handleNumber(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.phone = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handleUname(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.username = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handlePass(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.password = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
    handleRole(event) {
        var userDataReg = this.state.userDataReg;
        userDataReg.role = event.target.value;
        this.setState({ userDataReg: userDataReg })
    }
   
    handleRegister() {
        if (this.state.userDataReg.name == null) {
            toast.warning("Please fill your name", { autoClose: 2000, theme: "dark" })
        }
        else if (this.state.userDataReg.address == null) {
            toast.warning("Please fill your address", { autoClose: 2000 })
        }
        else if (this.state.userDataReg.phone == null) {
            toast.warning("Please fill your phone number", { autoClose: 2000 })
        }
        else if (this.state.userDataReg.username == null) {
            toast.warning("Please fill your user name", { autoClose: 2000 })
        }
        else if (this.state.userDataReg.password == null) {
            toast.warning("Please fill your password", { autoClose: 2000 })
        }
        else if (this.state.userDataReg.role == null) {
            toast.warning("Please select your role", { autoClose: 2000 })
        }
        else {
            toast("Registered",{ autoClose: 2000 })
            console.log(this.state.userDataReg.name);
            console.log(this.state.userDataReg.address);
            console.log(this.state.userDataReg.phone);
            console.log(this.state.userDataReg.username);
            console.log(this.state.userDataReg.password);
            console.log(this.state.userDataReg.role);

            const url = "http://localhost:4000/register/registerdata"
            const data = {
                name: this.state.userDataReg.name,
                address: this.state.userDataReg.address,
                phone: this.state.userDataReg.phone,
                username: this.state.userDataReg.username,
                password: this.state.userDataReg.password,
                role: this.state.userDataReg.role,
            }
            const header = {
                'Content-Type': 'application/json',

            }

            console.log("data--",data)
            axios.post(url, data, header).then((response) => {
                console.log(response);
                if (response.data.success === true) {
                    this.setState({
                        result_message: response.data.message
                    })
                    alert(this.state.result_message)
                    this.props.history.push('/login')
                }
                else {
                    alert("Registration Failed")
                }
            })
                .catch(function (err) {
                    console.log(err)
                })

        }
    }
    handlesubmit(e){
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="regdiv pb-5">
                    <br />
                    <form action="" className="ui form pt-5" id="formdiv" onSubmit={this.handlesubmit.bind(this)} >
                        Name:
                        <input type="text" className="ui input mb-3 form-control form-group" name="name" placeholder="Enter your Name" value={this.state.userDataReg.name} onChange={this.handleName.bind(this)} />

                        Address:
                        <input type="text" className="ui input mb-3 form-control form-group" name="address" placeholder="Enter your Address" value={this.state.userDataReg.address} onChange={this.handleAddress.bind(this)} />

                        Phone Number:
                        <input type="text" className="ui input mb-3 form-control form-group" name="phone" placeholder="Enter your Phone Number" value={this.state.userDataReg.phone} onChange={this.handleNumber.bind(this)} />
                        User Name:
                        <input type="text" className="ui input mb-3 form-select " name="username" placeholder="Enter your User Name" value={this.state.userDataReg.username} onChange={this.handleUname.bind(this)} />
                        Password: <input type="password" name="password" className="ui input mb-3" placeholder="Enter your Password" value={this.state.userDataReg.password} onChange={this.handlePass.bind(this)} />

                        Select your Role:
                        <select name="role" id="role" className="mt-3 form-control form-group" value={this.state.userDataReg.role} onChange={this.handleRole.bind(this)}>
                            <option selected>Choose your Role:</option>
                            <option value="1">Volunteer</option>
                            <option value="2">User</option>
                            <option value="3">Recycler</option>

                        </select>
                        <div className="mt-3 pt-1 text-center"><button className="log-button" onClick={this.handleRegister.bind(this)}>Register</button><br /></div>
                        <div className="mt-3 pt-1 text-center" style={{ fontWeight: "bold" }}>Already Registered? <a className="text-danger"  style={{cursor:"pointer"}} onClick={()=>this.props.history.push('/login')}>Login</a></div>
                    </form>
                    <ToastContainer />

                </div>
            </div>

        );
    }

}

export default Register;
