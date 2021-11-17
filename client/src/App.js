import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Redirect, Link } from "react-router-dom"
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
      <Routes>
      <Route exact path="/"  element={<Home/>}>
      </Route>

      <Route exact path="/login"  element={<Login/>}>
    
      </Route>
      <Route exact path="/register"  element={<Register/>}>
      </Route>
      <Route exact path="/user"  element={<User/>}>
      </Route>
      <Route exact path="/roles"  element={<Roles/>}>
      </Route>
      <Route exact path="/volunteer"  element={<Volunteer/>}>
      </Route>
      <Route exact path="/add-request"  element={<AddRequest/>}>
      </Route>
      <Route exact path="/bin-status"  element={<Binstatus/>}>
      </Route>
      <Route exact path="/payment"  element={<Payment/>}>
      </Route>
      <Route exact path="/admin"  element={<Admin/>}>
      </Route>
      <Route exact path="/userdetails"  element={<Userdetails/>}>
      </Route>
      <Route exact path="/recycler"  element={<Recycler/>}>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
//exported to index.js in the name App