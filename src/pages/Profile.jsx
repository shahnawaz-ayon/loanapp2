import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import profilepic from './profilepic.jpg';


import {
  Card, ListGroup, CardImg, CardText, 
  } from 'react-bootstrap';
import { CardBody ,CardTitle, Container, CardSubtitle} from 'reactstrap';


class Profile extends Component {
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
<Container>
      <h1>User Profile</h1>
      <div>
      <Card>
      <img src={profilepic} alt="pm" width="200" height="180" padding="10px" />
        <CardBody>
          <CardTitle tag="h5">Name: John Abraham </CardTitle>
          
          

          <Button variant="success">Update Info</Button>{" "}
          <Button variant="danger">Deposit</Button>
        </CardBody>
      </Card>
    </div>
      </Container>
      
      <Container>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
             User Decription: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </ListGroup.Item>
            <ListGroup.Item as="li">Name: John Abraham</ListGroup.Item>
            <ListGroup.Item as="li">Address: Dhaka, Bangladesh</ListGroup.Item>
            <ListGroup.Item as="li">Phone: 01654884368</ListGroup.Item>
          </ListGroup>

          <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Month</th>
      <th>Type of Payment</th>
      <th>Deposit Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>January</td>
      <td>Regular Payment</td>
      <td>5000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>February</td>
      <td>Special Payment</td>
      <td>10000</td>
    </tr>
    <tr>
      <td>3</td>
      <td>March</td>
      <td>Regular Payment</td>
      <td>20000</td>
    </tr>
    <tr>
      <td>4</td>
      <td>April</td>
      <td>Regular Payment</td>
      <td>30000</td>
    </tr>
    <tr>
      <td>4</td>
      <td>May</td>
      <td>Unpaid</td>
      <td>000</td>
    </tr>
    <tr>
      <td>4</td>
      <td>June</td>
      <td>Regular Payment</td>
      <td>30000</td>
    </tr>
  </tbody>
</Table>
          </Container>
      
      </div>
    );
  }
}

export default Profile
