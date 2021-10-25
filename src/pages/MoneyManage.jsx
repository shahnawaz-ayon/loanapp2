import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';
import { Container } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Table from 'react-bootstrap/Table';


class MoneyManage extends Component {
  render() {
    return (
      
      <div>
           <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/">Login</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Home">Home</Nav.Link>
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
    <Nav.Link  href="/StyleSet">Style Set</Nav.Link>
  </Nav.Item>
  </Nav>
<Container>
<h1>Money Management</h1>
      
      <div>
        <p>At the point of the adoption the care order ends and the adoptive parents
           take over sole parental responsibility. Unless an adoption order is made or the child returns home, care orders last until the child turns 18. Local authorities have
           a duty to continue to promote the welfare of care-leavers until the age of 21, or 25 if the young person wants to.
           </p>

<hr></hr>
<div class="container-sm">
  <center>
<Button style={{color:"#ffffff", margin: "5%", boxShadow: "5px 5px 3px rgba(252, 15, 31, 0.62)"}} href="https://www.2checkout.com/">Online Payment- 2checkout</Button> {" "}
</center>
<h3>Transaction History</h3>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Deposit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>5000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Tom</td>
      <td>Thornton</td>
      <td>10000</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Jacob</td>
      <td>Devid</td>
      <td>20000</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Floyed</td>
      <td>Kevin</td>
      <td>30000</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Sam</td>
      <td>Goerge</td>
      <td>30000</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Hank</td>
      <td>Mckinsey</td>
      <td>30000</td>
    </tr>
  </tbody>
</Table>
    </div>
<br></br>

<Button color="danger">Contact Admin</Button>



      </div>
      
      </Container>
      
      </div>
    );
  }
}

export default MoneyManage;
