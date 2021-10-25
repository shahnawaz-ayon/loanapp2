import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button, Form, Col, Row } from 'react-bootstrap';

class Register extends Component {
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

       <div className='container fluid'>
        <br></br>
        <br></br>
          <h3>Register page</h3>
          <br></br>
          <hr></hr>
        <Form>
        <Form.Group controlId="formBasicEmail">
        <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>
   
  </Form.Group>    

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
      </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Confirm password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

    <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
      </div>
      </div>
    );
  }
}

export default Register
