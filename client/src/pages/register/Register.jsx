import { Component } from "react";
import Header from "../../components/header/Header";
import "./register.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import img2 from "../../components/images/signup-image.jpg"
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LockIcon from '@material-ui/icons/Lock';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

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

    handleRegister(e) {
        e.preventDefault();

        var pattern = new RegExp(/^[0-9\b]+$/);
        if (this.state.userDataReg.name == null) {
            toast.warning("Please fill your name", { autoClose: 2000, theme: "dark" })
        }
        else if (this.state.userDataReg.address == null) {
            toast.warning("Please fill your address", { autoClose: 2000 })
        }
        else if (this.state.userDataReg.phone == null) {
            toast.warning("Please fill your phone number", { autoClose: 2000 })
        }
        else if(!pattern.test(this.state.userDataReg.phone)){
            toast.warning("Please enter a valid phone number", { autoClose: 2000 })

        }
        else if((this.state.userDataReg.phone.length) !=10){
            toast.warning("Please enter a 10 digit phone number", { autoClose: 2000 })

        }
        else if (this.state.userDataReg.username == null) {
            toast.warning("Please fill your user name", { autoClose: 2000 })
        }
        else if((this.state.userDataReg.username.length)<3){
            toast.warning("Username should have atleast 3 characters", { autoClose: 2000 })

        }
        else if (this.state.userDataReg.password == null) {
            toast.warning("Please fill your password", { autoClose: 2000 })
        }
        else if((this.state.userDataReg.password.length)<5){
            toast.warning("Password should have atleast 5 characters", { autoClose: 2000 })

        }
        else if (this.state.userDataReg.role == null) {
            toast.warning("Please select your role", { autoClose: 2000 })
        }
        else {
            
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

            console.log("data--", data)
            axios.post(url, data, header).then((response) => {//data posted to DB and then redirect to login page
                console.log(response);
                if (response.data.success === true) {
                    this.setState({
                        result_message: response.data.message
                    })
                    alert(this.state.result_message)
                    this.props.history.push('/login')
                }
                else {
                    toast("Registration Failed", { autoClose: 2000 })
                }
            })
                .catch(function (err) {
                    console.log(err)
                })

        }
    }
   
    render() {
        return (
            <div>
                <Header />
                <section class="sign-in mb-5 pb-5 mt-5 pt-5">
                    <div class="container">
                        <div class="signin-content">
                            <div class="signin-image">
                                <figure><img src={img2} alt="signup" /></figure>
                                <a href="/register" class="signup-image-link">Create an account</a>
                            </div>

                            <div class="signin-form">
                                <h2 class="form-title">Sign up</h2>
                                <form class="register-form" id="login-form" onSubmit={this.handleRegister.bind(this)}>
                                    <div class="form-group">
                                        <label><PersonIcon style={{ fill: "#9CC094", fontSize: "27px" }} /></label>
                                        <input type="text" name="name" placeholder="Enter your Name" style={{ paddingLeft: "40px" }} value={this.state.userDataReg.name} onChange={this.handleName.bind(this)} />
                                    </div>
                                    <div class="form-group">
                                        <label><HomeIcon style={{ fill: "#9CC094", fontSize: "27px" }} /></label>
                                        <input type="text" name="address" placeholder="Enter your Address" style={{ paddingLeft: "40px" }} value={this.state.userDataReg.address} onChange={this.handleAddress.bind(this)} />
                                    </div>
                                    <div class="form-group">
                                        <label><LocalPhoneIcon style={{ fill: "#9CC094", fontSize: "27px" }} /></label>
                                        <input type="number" name="phone" placeholder="Enter your Phone Number" style={{ paddingLeft: "40px" }} value={this.state.userDataReg.phone} onChange={this.handleNumber.bind(this)} />
                                    </div>
                                    <div class="form-group">
                                        <label><AccessibilityIcon style={{ fill: "#9CC094", fontSize: "27px" }} /></label>
                                        <input type="text" name="username" placeholder="Enter your User Name" style={{ paddingLeft: "40px" }} value={this.state.userDataReg.username} onChange={this.handleUname.bind(this)} />
                                    </div>
                                    <div class="form-group">
                                        <label><LockIcon style={{ fill: "#9CC094", fontSize: "27px" }} /></label>

                                        <input type="password" name="password" className="ui input mb-3" style={{ paddingLeft: "40px" }} placeholder="Enter your Password" value={this.state.userDataReg.password} onChange={this.handlePass.bind(this)} />
                                    </div>
                                    <div class="drop">
                                        <div class="select-box">
                                            <select name="role" id="role" className="mt-3 form-control form-group" style={{ paddingLeft: "40px" }} value={this.state.userDataReg.role} onChange={this.handleRole.bind(this)}>
                                                <option selected>Choose your Role:</option>
                                                <option value="1">Volunteer</option>
                                                <option value="2">User</option>
                                                <option value="3">Recycler</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                        <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                                    </div>
                                    <div class="form-group form-button">
                                        <input type="submit" name="signin" id="signin" class="form-submit" value="Register" />
                                    </div>
                                    <div style={{ fontWeight: "bold", fontSize: "15px" }}>Already Registered? <a className="text-danger" style={{ cursor: "pointer", fontSize: "20px" }} onClick={() => this.props.history.push('/login')}>Login</a></div>

                                </form>
                                
                            </div>
                        </div>
                    </div>
                </section>
                {/* <Header />
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

                </div> */}
                <ToastContainer />
            </div>

        );
    }

}

export default Register;
