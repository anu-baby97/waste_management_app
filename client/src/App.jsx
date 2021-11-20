import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom"
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Roles from "./pages/roles/Roles";
import Volunteer from "./pages/volunteer/Volunteer";
import AddRequest from "./pages/request/AddRequest";
import Binstatus from "./pages/binstatus/Binstatus";
import Payment from "./pages/payment/Payment";
import Admin from "./pages/admin/Admin";
import Userdetails from "./pages/userdetails/Userdetails";
import Recycler from "./pages/recycler/Recycler";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/user" component={User} />
        <Route path="/recycler" component={Recycler} />
        <Route path="/admin" component={Admin} />
        <Route path="/volunteer" component={Volunteer} />

        <Route path="/roles" component={Roles} />
        <Route path="/add-request" component={AddRequest} />
        <Route path="/bin-status" component={Binstatus} />
        <Route path="/payment" component={Payment} />
        <Route path="/userdetails" component={Userdetails} />
      </Switch>
    </Router>
  );
}

export default App;
//exported to index.js in the name App