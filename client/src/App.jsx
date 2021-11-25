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
import Admin from "./pages/admin_dashboard/Admin";
import Userdetails from "./pages/userdetails/Userdetails";
import Recycler from "./pages/recycler/Recycler";
import Payment_Summary from "./pages/payment_summary/Payment_summary";
import Admin_add_bin from "./pages/admin_add_bin/Admin_add_bin";
import Admin_manage_users from "./pages/admin_manage_users/Admin_manage_users";
import Admin_manage_volunteer from "./pages/admin_manage_volunteer/Admin_manage_volunteer";
import Admin_payment_summary from "./pages/admin_payment_summary/Admin_payment_summary";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/user" component={User} />
        <Route path="/recycler" component={Recycler} />
        <Route path="/admin-dashboard" component={Admin} />
        <Route path="/volunteer" component={Volunteer} />

        <Route path="/roles" component={Roles} />
        <Route path="/add-request" component={AddRequest} />
        <Route path="/bin-status" component={Binstatus} />
        <Route path="/payment" component={Payment} />
        <Route path="/userdetails" component={Userdetails} />
        <Route path="/payment-summary" component={Payment_Summary} />
        <Route path="/admin-add-bin" component={Admin_add_bin} />
        <Route path="/admin-manage-users" component={Admin_manage_users} />
        <Route path="/admin-manage-volunteers" component={Admin_manage_volunteer} />

        <Route path="/admin-payment-summary" component={Admin_payment_summary} />



      </Switch>
    </Router>
  );
}

export default App;
//exported to index.js in the name App