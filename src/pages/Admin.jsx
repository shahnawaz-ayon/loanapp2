import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';
import { Container } from 'reactstrap';
import TabContent from 'react-bootstrap/TabContent';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import MyApp from "./Calendar";
import 'react-calendar/dist/Calendar.css';
import ExampleChart from "./Chart";
import wa from './wa.png';
import pm from './pm.png';
import ya from './ya.png';
import gmail from './gmail.png';
import vb from './vb.png';
import slack from './slack.png';


class About extends Component {
  render() {
    return (
      <div>
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
</div>
<div>
      <h1>Admin Panel</h1>
      <Tabs
  defaultActiveKey="home"
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="home" title="Control Panel">
  
  <Container fluid="md">
    <MyApp/>
    <br></br>
  <h5>Fixed Deposit Calculator</h5>  
  <p>Use the HDFC Bank Fixed Deposit calculator to find out how much do you earn through a Fixed Deposit
Want to know how much you can earn on fixed deposits? Here is a fixed deposits calculator by HDFC Bank that lets you identify the maturity amount and the interest earned when you open a Fixed Deposit.</p>
     <hr></hr>
</Container>
     <Container fluid="md">
     <p> User Access</p> 
     <Button color="primary"> Normal User</Button> {" "}
     <Button color="primary">Special User</Button> {" "}
     <Button color="primary">Admin User</Button>

    
     <p>Subscription</p>
     <Button color="primary">Special User</Button> {" "}
     <Button color="primary">Admin User</Button>

     <p>Interest Rate Manually Set</p>
     <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
    <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
    </InputGroup>
    <Button color="primary">Reset Interest Rate</Button>
</Container>

  </Tab>
  <Tab eventKey="profile" title="Report">
    <ExampleChart/>
  <Container fluid="md">
   
  <p>Here admin will get the reports, data, graphs and charts</p>  
  <div>
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</Table>

  </div>
  </Container>
  </Tab>
  <Tab eventKey="contact" title="Communication">

  <Container fluid="md">
  <p>Here the communications channels will be used</p>  

  <CardGroup>
  <Card>
    <center>
  <img src={pm} alt="pm" width="200" height="200"/>
    </center>
    <Card.Body>
      <Card.Title>Personal Message</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button style={{color:"#ffffff", margin: "5%", boxShadow: "5px 5px 3px rgba(252, 15, 31, 0.62)"}} href="https://web.whatsapp.com">Private Messaging</Button> {" "}
  
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <center>
  <img src={ya} alt="ya.png" width="200" height="200"/>
    </center>
    <Card.Body>
      <Card.Title>Yahoo</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content. This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Button style={{color:"#ffffff", margin: "5%", boxShadow: "5px 5px 3px rgba(245, 252, 15, 0.62)"}} href="https://login.yahoo.com">Yahoo</Button> 
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <center>
  <img src={gmail} alt="gmail.png" width="200" height="200"/>
    </center>
    <Card.Body>
      <Card.Title>Gmail</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Button style={{color:"#ffffff", margin: "5%", boxShadow: "5px 5px 3px rgba(88, 240, 0,  0.62)"}} href="https://gmail.com">E-mail</Button> {" "}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
</CardGroup>

<hr></hr>
<CardGroup>
  <Card>
    <center>
  <img src={vb} alt="vb.png" width="200" height="200"/>
    </center>
    <Card.Body>
      <Card.Title>Viber</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Button style={{color:"#ffffff", margin: "5%", boxShadow: "5px 5px 3px rgba(252, 15, 31, 0.62)"}} href="https://web.whatsapp.com">Private Messaging</Button> {" "}
  
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <center>
  <img src={slack} alt="slack.png" width="200" height="200"/>
    </center>
    <Card.Body>
      <Card.Title>Slack</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content. This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Button style={{color:"#ffffff", margin: "5%", boxShadow: "5px 5px 3px rgba(21, 31, 29, 0.62)"}} href="https://slack.com/signin">Slack</Button> {" "} 
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <center>
    <img src={wa} alt="wa" width="200" height="200"/>
    </center>
    <Card.Body>
      <Card.Title>Whatsapp</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Button style={{color:"#ffffff", margin: "5%", boxShadow: "5px 5px 3px rgba(0, 240, 212, 0.62)"}}href="https://web.whatsapp.com">Whatsapp</Button>  {" "} 
 </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
</CardGroup>
  <ButtonGroup vertical>

  
 
</ButtonGroup>
</Container>

  </Tab>
</Tabs>
  </div>
  </div>
      
     
         
    );
  }
}

export default About
