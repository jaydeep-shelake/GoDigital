import React from 'react';
import SignUp from './Components/Authentication/SignUp';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Authentication/Login';
import PrivateRoute from './Components/PrivateRoute';
import ForgatPassword from './Components/Authentication/ForgatPassword';
import UpdateProfile from './Components/Authentication/UpdateProfile';
import MainDashboard from './Components/Hostel/Dashboard';
import BottomNav from './Components/Hostel/BottomNav';
import Menu from './Components/Hostel/Menu';
import Leave from './Components/Hostel/LeaveApplication/Leave'
import {useAuth} from './Context/AuthContext';
import Entery from './Components/Hostel/InOut/Entery'
import Inentry from './Components/Hostel/InOut/In_entry'
import Out_register from './Components/Hostel/InOut/Out_register';
import Visitor from './Components/Hostel/forms/Visitor';
import Compliant from './Components/Hostel/forms/Complaint';
import Contact from './Components/Hostel/forms/Contact';
import AdminLeave from './Components/Admin/AdminLeave'
const App = () => {
    const {currentUser,userInfo}=useAuth();
    console.log(userInfo)
    return (
              <Router>
                     {currentUser&&<Menu/>}
                  <Switch>
                    <PrivateRoute path="/" exact component={MainDashboard}/>
                     {/* Profile Routes */}

                     <PrivateRoute  path="/user" component={Dashboard}/>
                     <PrivateRoute  path="/updateProfile" component={UpdateProfile}/>
                   {userInfo?.role==='Admin'?<PrivateRoute path="/leave" component={AdminLeave}/>:<PrivateRoute path="/leave" component={Leave}/>}
                    <PrivateRoute path="/inout" component={Entery}/>
                    <PrivateRoute path="/in" component={Inentry}/>
                    <PrivateRoute path="/out" component={Out_register}/>
                    <PrivateRoute path="/visitor" component={Visitor}/>
                    <PrivateRoute path="/complaints" component={Compliant}/>
                    <PrivateRoute path="/contact" component={Contact}/>
                        {/* Auth Routes */}
                      <Route path="/signup" component={SignUp}/>
                      <Route path="/login" component={Login}/>
                      <Route path="/resetPassword" component={ForgatPassword}/>

                  </Switch>
                  {currentUser&&<BottomNav/>}
              </Router>
    )
}

export default App
