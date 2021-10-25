import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';
import { Container } from 'reactstrap';
import Styled from './Styled';

class StyleSet extends Component {
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
      <h1>Customize Style</h1>
      
      <div>
        <p>This page will contain the Style and Theme</p>
        <Styled/>
<br></br>
<br></br>
<form>
<textarea rows="10" cols="100">

</textarea>

</form>

<br></br>

<Button color="danger">Set Theme</Button>




      </div>
      </Container>
      </div>
    );
  }
}

export default StyleSet
