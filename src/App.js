
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Styled from './pages/Styled';
import StyleSet from './pages/StyleSet.jsx';
import Admin from './pages/Admin.jsx';
import MoneyManage from './pages/MoneyManage.jsx';
import Profile from './pages/Profile.jsx';
import Register from './pages/Register.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login.jsx';



  class App extends Component {
    render () {
    return (
    <Router>
      
      <div>
      <Route exact path="/" component={Login}/>
        <Route path="/Admin" component={Admin}/>
        <Route path="/StyleSet" component={StyleSet}/>
        <Route path="/MoneyManage" component={MoneyManage}/>
        <Route path="/Profile" component={Profile}/>
        <Route path="/Register" component={Register}/>
        <Route path="/Home" component={Home}/>
            
        
  

       
      
      </div>
      <div className="mb-3">
      <center>
        <Styled/>
     <h5>  Copyright:Banking App</h5>
     </center> 
     </div>
    
    </Router>
    );
  }
}
export default App;