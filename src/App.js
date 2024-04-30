import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import InputForm from './components/Form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from './components/Table';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

function App() {

  const [name, setName] = useState("")
  const [numbersArr, setNumberArr] = useState([])
  const [total, setTotal] = useState()
  // const [destiny, setDestiny] = useState(1)
  
  const handleName = (name) => {
    setName(name);
  }

  const handleNumbers = (numbers) => {
    setNumberArr(numbers);
  
    setTotal(() => {
      const sum = numbers.reduce((a, b) => a + b, 0);
      return sum;
    });


    // if (total.length === 2 && total[0] === total[1]) {
    //   return true;
    // } else {
    //   setDestiny(destiny+1);
    // }


  }
  

  return (
    <div className='app'>
    <Container fluid className='p-0'>
      <Header/>
      <Container>
      <Row>
        <Col>
          <h4 className='text-center'>Chaldean Name Numerology - Destiny, Heart Desire and Dream Numbers</h4>
          <h6 className='text-center'>Online Name Numerology Calculator</h6>
          <p className='mt-5'><strong>Calculate name number by Chaldean name numerology</strong>: This is the most accurate and ancient alphabet's number numerology system, which was developed by Chaldean and inspired by Indian Vedic numerology. Another numeral math system is the Pythagorean. In the Chaldean name numerology, the popular or most known name is used to predict the name numbers and in the Pythagorean numerology, the birth or legal name should be used to predict the numerology forecast.</p>
        </Col>
      </Row>
      <Row>
        <Card className='p-3'>
        <Col lg={6} className='m-auto'>
          <InputForm setNameData={handleName} setNumberData={handleNumbers}/>
        </Col>
            { name !== "" && (
        <Col lg={12}>
          <h6>Chaldean Name Numerology Reading of {name}</h6>
          <p>Name - {name}</p>
          <p>Numbers - {numbersArr}</p>
          <h5>Compound Name Number/Namank (Numerology Total of Your Name): {total}</h5>
          {/* <p>Destiny - {destiny}</p>   */}
        </Col>
    )}
      </Card>
      </Row>
      <Row>
        <Table />
      </Row>
      </Container>
    </Container>
    </div>
  );
}

export default App;
