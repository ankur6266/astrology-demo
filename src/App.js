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
    <Container>
      <Header />
      <Row>
        <Col>
          <h4>Chaldean Name Numerology - Destiny, Heart Desire and Dream Numbers</h4>
          <h6 className='m-auto'>Online Name Numerology Calculator</h6>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
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

      </Row>
      <Row>
        <Table />
      </Row>
    </Container>
    </div>
  );
}

export default App;
