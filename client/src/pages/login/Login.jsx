import Header from "../../components/header/Header";
import "./login.css"
import { Link } from "react-router-dom"
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDataLog:
            {
                uname: props.uname,
                pass: props.pass,
            }
        }
    }
    handleUname(event) {
        var userDataLog = this.state.userDataLog;
        userDataLog.uname = event.target.value;
        this.setState({ userDataLog: userDataLog })
    }
    handlePass(event) {
        var userDataLog = this.state.userDataLog;
        userDataLog.pass = event.target.value;
        this.setState({ userDataLog: userDataLog })
    }
    handleLogin(){
        if(this.state.userDataLog.uname==null){
            toast.warning("Please fill your name",{autoClose:10000})
        }
        else if(this.state.userDataLog.pass==null){
            toast.warning("Please fill your password",{autoClose:10000})
        }
        else{
            console.log(this.state.userDataLog.uname);
            console.log(this.state.userDataLog.pass);
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="logdiv">
                    <br />
                    <form action="" className="ui form pt-5" id="formdiv">

                        Username:
                        <input type="email" className="ui input mb-3" name="uname" value={this.state.userDataLog.uname} onChange={this.handleUname.bind(this)} />

                        Password: <input type="password" className="ui input mb-3 " name="pass" value={this.state.userDataLog.pass} onChange={this.handlePass.bind(this)} />
                                         
                        <div className="mt-3 pt-1 text-center"><br /><Link to=""><button className="log-button" onClick={this.handleLogin.bind(this)}>Login</button></Link></div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default Login;
