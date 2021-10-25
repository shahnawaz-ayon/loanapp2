import React, { Component } from 'react';
import { Container, Nav, Button } from 'react-bootstrap';
import Styled from './Styled';
import Calculator2 from './Calculator2';



class Home extends Component {
  render() {
    return (
      <div>
        <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Admin">Admin</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/MoneyManage">Money Management</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Profile">Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Register">Register</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Login">Login</Nav.Link>
  </Nav.Item>
   <Nav.Item>
    <Nav.Link  href="/StyleSet">Style Set</Nav.Link>
  </Nav.Item>
  
</Nav>
<div className="container">
 
     <h2>Welcome To Digital Finance Management</h2>
     <hr></hr>


<Container>
  
  <h1>Hello, world!</h1>
  Use the HDFC Bank Fixed Deposit calculator to find out how much do you earn through a Fixed Deposit
Want to know how much you can earn on fixed deposits? Here is a fixed deposits calculator by HDFC Bank that lets you identify the maturity amount and the interest earned when you open a Fixed Deposit.
<div></div>
     <p><Button variant="primary" href="./Register">Register</Button>  {" "}
     <Button variant="primary" href="./Login">Login</Button>   </p>
     
     <Calculator2/>
     
</Container>
          </div>
          <hr></hr>
  

      </div>
      
    );
  }
}

export default Home;
