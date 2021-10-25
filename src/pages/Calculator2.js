import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import { Table } from 'reactstrap';
import {Col} from 'reactstrap';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav, Form, Row } from 'react-bootstrap';


function Calculator2() {
 

  const [principal, setPrincipal] = useState();
  const [years, setYears] = useState();
  const [interest, setInterest] = useState();

  
  const [result, setResult] = useState();
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();
  const [result3, setResult3] = useState();
  const [result4, setResult4] = useState();
  const [result5, setResult5] = useState();
  const [result6, setResult6] = useState();
  const [result7, setResult7] = useState();
  const [result8, setResult8] = useState();
  const [result9, setResult9] = useState();
  const [result10, setResult10] = useState();
  const [total, setTotal] = useState();


  const [date, setDate] = useState();
  
  const styles = {
    border: '1px solid rgba(0, 0, 0, 0.05)'};

  
  const calculate = () => {
  
    const result = (interest * years*100)+ +principal;
    setResult(result);
    const result1 = ((interest *2) * years*100)+ +principal;
    setResult1(result1);
    const result2 = ((interest *3) * years*100)+ +principal;
    setResult2(result2);
    const result3 = ((interest *4) * years*100)+ +principal;
    setResult3(result3);
    const result4 = ((interest *5) * years*100)+ +principal;
    setResult4(result4);
    const result5 = ((interest *6) * years*100)+ +principal;
    setResult5(result5);
    const result6 = ((interest *7) * years*100)+ +principal;
    setResult6(result6);
    const result7 = ((interest *8) * years*100)+ +principal;
    setResult7(result7);
    const result8 = ((interest *9) * years*100)+ +principal;
    setResult8(result8);
    const result9 = ((interest *10) * years*100)+ +principal;
    setResult9(result9);
    const result10=(result9-principal);
    setResult10(result10);

    const total = years* (+interest);
    setTotal(total.toFixed(2)*(100));
    const d= new Date;
    const n = d. getFullYear()+'-'+(d. getMonth()+1)+'-'+d. getDate();
    setDate(n);

    
    
    
    

    
  };

  return (
    <div>
   
    
   <Container maxWidth="lg">
    <Card varient='primary'>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
<Col>
      <h3
       style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
      }}
      >Loan Calculator</h3>
</Col>  <Container maxWidth="sm">
  <lebel>Senior Citizen</lebel><br></br>
<Col>
  Yes  <input type="radio" id="css" name="fav_language" value="CSS"></input>
    {' '}
<br />
   No <input type="radio" id="css" name="fav_language" value="CSS"></input>
<br/>
</Col>
   <Dropdown>
     
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Type of Fixed Deposit
  </Dropdown.Toggle><br />
  
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Reinvestment</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Quarterly</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Monthly</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Short Term</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<br />
<Row>
    <Col>
      <Form.Control placeholder="Months" />
    </Col>
    <Col>
      <Form.Control placeholder="Days" />
    </Col>
  </Row>
  </Container>

      <div className="mb-3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "5vh",
          
        }}
      ><br /></div>
        <form style={{
          alignItems: "center",
          justifyContent: "center",
          height: "20vh",
        }}>
           
          <TextField
            label="What is the principal?"
            variant="outlined"
            type="number"
            onChange={(e) => setPrincipal(e.target.value)}
          />
          <TextField
            label="How many Months?"
            variant="outlined"
            type="number"
            onChange={(e) => setYears(e.target.value)}
          />
          <TextField
            label="Annual Interest rate?"
            variant="outlined"
            type="number"
            onChange={(e) => setInterest(e.target.value / 100)}
          />
          {' '}
          <Button
            height="50vh"
            variant="contained"
            color="success"
            onClick={() => {
              calculate();
            }}
          >
            Calculate
          </Button>
          
          </form>
          
          <br/>
          <br/>
          <br/>
          
          </Card.Body>  
          </Card>
          
          <Container maxWidth="sm">
          <div style={{ fontSize: "30px"}}>FD Balance {' '} {result9}</div>
          <div style={{ fontSize: "30px"}}>Interest {' '} {result10}</div>
          </Container>
          <Container maxWidth="lg">
          <Table striped bordered variant="primary">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Deposit Amount</th>
                      <th>Interest</th>
                      <th>Date</th>
                      <th>Total Interest</th>
                      <th>Due</th>
                      <th>Withdraw</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>{principal}</td>
                      <td>{total}</td>
                      <td>1st Month</td>
                      <td>{result}</td>
                      <td>{result}</td>
                      <td>{result}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>{principal}</td>
                      <td>{total}</td>
                      <td>2nd Month</td>
                      <td>{result1}</td>
                      <td>{result}</td>
                      <td>{result}</td>
                    </tr>
                    <tr>
                    <td>3</td>
                      <td>{principal}</td>
                      <td>{total}</td>
                      <td>3rd Month</td>
                      <td>{result2}</td>
                      <td>{result}</td>
                      <td>{result}</td>
                    </tr>
                    <tr>
                    <td>4</td>
                      <td>{principal}</td>
                      <td>{total}</td>
                      <td>4th Month</td>
                      <td>{result3}</td>
                      <td>{result}</td>
                      <td>{result}</td>
                    </tr>
                    <tr>
                    <td>4</td>
                      <td>{principal}</td>
                      <td>{total}</td>
                      <td>5th Month</td>
                      <td>{result4}</td>
                      <td>{result}</td>
                      <td>{result}</td>
                    </tr>
                    <tr>
                    <td>5</td>
                      <td>{principal}</td>
                      <td>{total}</td>
                      <td>6th Month</td>
                      <td>{result5}</td>
                      <td>{result}</td>
                      <td>{result}</td>
                    </tr>
                    <tr>
                    <td>6</td>
                      <td>{principal}</td>
                      <td>{total}</td>
                      <td>7th Month</td>
                      <td>{result6}</td>
                      <td>{result}</td>
                      <td>{result}</td>
                    </tr>
                    <tr>
                    <td>7</td>
                      <td>{principal}</td>
                      <td>{total}</td>
                      <td>8th Month</td>
                      <td>{result7}</td>
                      <td>{result}</td>
                      <td>{result}</td>
                    </tr>
                    <tr>
                    <td>8</td>
                      <td>{principal}</td>
                      <td>{total}</td>
                      <td>9th Month</td>
                      <td>{result8}</td>
                      <td>{result}</td>
                      <td>{result}</td>
                    </tr>
                    <tr>
                    <td>9</td>
                      <td>{principal}</td>
                      <td>{total}</td>
                      <td>10 Month</td>
                      <td>{result9}</td>
                      <td>{result}</td>
                      <td>{result}</td>
                    </tr>
                    
                  </tbody>
                </Table>
        
        
                </Container>
      </Container>
    </div>
  );
}
export default Calculator2