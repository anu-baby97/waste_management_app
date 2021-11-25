import Header from "../../components/header/Header";
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from "axios"
import PersonIcon from '@material-ui/icons/Person';
import adm from "../../components/images/adminangel.png"

toast.configure();

class Admin_add_bin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:
            {
                username: props.username,
                password: props.password,
            },
            latitude: "",
            longtitude: ""
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
            toast.warning("Please enter a bin name", { autoClose: 2000 })
        }
        else if (this.state.userData.password == null) {
            toast.warning("Please enter your place", { autoClose: 2000 })
        }
        else {
            console.log(this.state.userData.username);
            console.log(this.state.userData.password);

            const url = "http://localhost:4000/bin/add"
            const params = {

                username: this.state.userData.username,
                password: this.state.userData.password,
            }
            const header = {
                'Content-Type': 'application/json',

            }
            axios.post(url, params, header).then((response) => {
                console.log("==Add Bin result===", response);
                if (response.data.success === true) {
                    this.setState({
                        message: response.data.message,

                    })
                    alert(this.state.message)
                    this.props.history.push('/admin-dashboard')

                }
                else {
                    alert("Adding Bin Failed")
                }
            })
                .catch(function (err) {
                    console.log(err)
                    alert("adding bin failed")
                });

        }

    }

    componentDidMount = () => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition((position) => {
                console.log("==position==", position)
                console.log("==latitude==", position.coords.latitude)
                console.log("==longtitude==", position.coords.longitude)

                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            })
        }
    }

    render() {
        return (
            <div>
                <div class="main">

                    <section class="signup">
                        <div class="container">
                            <div class="signup-content" style={{ paddingRight: "0" }}>
                                <div class="signup-form">
                                    <h2 class="form-title">Add Waste Bin</h2>
                                    <form class="register-form" id="register-form" onSubmit={this.handleLogin.bind(this)}>
                                        <div class="form-group">
                                            <label><PersonIcon style={{ fill: "#9CC094", fontSize: "27px" }} /></label>
                                            <input type="text" name="username" placeholder="Enter Bin Name" style={{ paddingLeft: "40px" }} value={this.state.userData.username} onChange={this.handleUname.bind(this)} />
                                        </div>
                                        <div class="form-group">
                                            <label><svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "#9CC094" }} width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg></label>
                                            <input type="text" placeholder="Enter your Place" name="password" style={{ paddingLeft: "40px" }} value={this.state.userData.password} onChange={this.handlePass.bind(this)} />
                                        </div>

                                        <div class="form-group form-button">
                                            <input type="submit" name="signup" id="signup" class="form-submit" value="Add" />
                                        </div>
                                    </form>
                                </div>
                                <div class="signup-image">
                                    <figure><img src={adm} alt="sign up" /></figure>
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

export default Admin_add_bin;
