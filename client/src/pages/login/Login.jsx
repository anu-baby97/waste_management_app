import Header from "../../components/header/Header";
import "./login.css"
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from "axios"
import img1 from "../../components/images/signin-image.jpg"
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

toast.configure();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:
            {
                username: props.username,
                password: props.password,
            },
            calert: false
        }
    }
    handleUname(event) {
        var userData = this.state.userData;
        userData.username = event.target.value;
        this.setState({ userData: userData })
    }
    handlePass(event) {
        var userData = this.state.userData;
        userData.password = event.target.value;
        this.setState({ userData: userData })
    }
    handleLogin(e) {
        e.preventDefault();

        if (this.state.userData.username == null) {
            toast.warning("Please fill your name", { autoClose: 2000 })
        }
        else if (this.state.userData.password == null) {
            toast.warning("Please fill your password", { autoClose: 2000 })
        }
        else {
            console.log(this.state.userData.username);
            console.log(this.state.userData.password);

            const url = "http://localhost:4000/login/logindata"
            const data = {

                username: this.state.userData.username,
                password: this.state.userData.password,
            }
            const header = {
                'Content-Type': 'application/json',

            }
            axios.post(url, data, header).then((response) => {
                console.log(response);
                if (response.data.success === true) {
                    this.setState({
                        result_message: response.data.message,
                        data: {
                            role: response.data.userRole,
                            login_id: response.data.loginId, //data from backend
                            token: response.data.token,
                            cname:response.data.name
                        }
                    })
                    console.log("data", this.state.data.login_id)

                    if (this.state.data.role === 0) { 
                        this.props.history.push('/admin-dashboard')
                        localStorage.setItem('logindata', JSON.stringify(this.state.data))
                        window.sessionStorage.setItem('isloggedin', true)
                    }
                    else if (this.state.data.role === 1) {//if role is 1 then redirect to user page
                        this.props.history.push('/volunteer')
                        localStorage.setItem('logindata', JSON.stringify(this.state.data))
                        window.sessionStorage.setItem('isloggedin', true)
                    }
                    else if (this.state.data.role === 2) {
                        this.props.history.push('/user')
                        localStorage.setItem('logindata', JSON.stringify(this.state.data))
                        window.sessionStorage.setItem('isloggedin', true)
                    }
                    else if (this.state.data.role === 3) {
                        this.props.history.push('/recycler')
                        localStorage.setItem('logindata', JSON.stringify(this.state.data))
                        window.sessionStorage.setItem('isloggedin', true)
                    }

                }
                else {
                    alert(this.state.result_message)
                    alert("Login Failed")
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
                <div class="main">

                    <section class="signup">
                        <div class="container">
                            <div class="signup-content">
                                <div class="signup-form">
                                    <h2 class="form-title">Sign up</h2>
                                    <form class="register-form" id="register-form" onSubmit={this.handleLogin.bind(this)}>
                                        <div class="form-group">
                                        <label><PersonIcon style={{fill:"#9CC094",fontSize:"27px"}}/></label>
                                            <input type="text" name="username" placeholder="Enter your User Name" style={{paddingLeft:"40px"}} value={this.state.userData.username} onChange={this.handleUname.bind(this)} />
                                        </div>
                                        <div class="form-group">
                                        <label><LockIcon style={{fill:"#9CC094",fontSize:"27px"}}/></label>

                                            <input type="password" placeholder="Enter your Password" name="password" style={{paddingLeft:"40px"}} value={this.state.userData.password} onChange={this.handlePass.bind(this)} />
                                        </div>
                                        <div class="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                                    </div>
                                        <div class="form-group form-button">
                                            <input type="submit" name="signup" id="signup" class="form-submit" value="Login" />
                                        </div>
                                    </form>
                                </div>
                                <div class="signup-image">
                                    <figure><img src={img1} alt="sign up" /></figure>
                                    <div className="mt-3 pt-1 text-center" style={{ fontWeight: "bold",fontSize:"13px" }}>Don't have an account? <a className="text-danger" style={{ cursor: "pointer", fontSize:"18px", paddingLeft:"4px" }} onClick={() => this.props.history.push('/register')}>Register</a></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <div className="logdiv">
                    <br />

                    <form action="" className="ui form pt-5" id="formdiv" onSubmit={this.handlesubmit.bind(this)}>

                        Username:
                        <input type="text" className="ui input mb-3 form-control form-group" name="username" placeholder="Enter your User Name" value={this.state.userData.username} onChange={this.handleUname.bind(this)} />

                        Password: <input type="password" className="ui input mb-1 form-control form-group " placeholder="Enter your Password" name="password" value={this.state.userData.password} onChange={this.handlePass.bind(this)} />

                        <div className=" text-center"><br /><button className="log-button" onClick={this.handleLogin.bind(this)}>Login</button></div>
                        <div className="mt-3 pt-1 text-center" style={{ fontWeight: "bold" }}>Don't have an account? <a className="text-danger" style={{ cursor: "pointer" }} onClick={() => this.props.history.push('/register')}>Register</a></div>

                    </form>
                </div> */}
                <ToastContainer />
            </div>
        );
    }
}

export default Login;
