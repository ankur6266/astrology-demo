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
import Result from './components/Result';

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

  }
  

  return (
    <div className='app'>
    <Container fluid className='p-0'>
      <Header />
      <Container>
      <Row className='text-center m-3'>
        <Col>
          <h4 className='page-heading'>Chaldean Name Numerology - Destiny, Heart Desire and Dream Numbers</h4>
          <h6 className='m-auto'>Online Name Numerology Calculator</h6>
        </Col>
      </Row>
        <Col>
        <div class="div-980">
          <p><strong>Calculate name number by Chaldean name numerology</strong>: This is the most accurate and ancient alphabet's number numerology system, which was developed by Chaldean and inspired by Indian Vedic numerology. Another numeral math system is the Pythagorean. In the Chaldean name numerology, the popular or most known name is used to predict the name numbers and in the Pythagorean numerology, the birth or legal name should be used to predict the numerology forecast.</p>
          <p>A name has various meanings in the manner of numerals math. The main name's numeral is called destiny or expression number, which is the sum of all alphabets in a name. The second number is a Soul Urge or Heart Desire number, which is calculated from vowels in a name, and the third is called dream or personality number, which is calculated from consonants in a name. Apart from this, a name also determines the <a href="/fortune-tellers/intense-energy-numbers">Hidden Passion number</a> and <a href="/fortune-tellers/numerology-habit-challenge">Habit Challenge number</a>. You may be interested to check <a href="/fortune-tellers/lucky-name-numerology">if your name is lucky for you or not</a>.</p>
        </div>
        </Col>
      <Card className='p-3'>
      <Row>
        <Col className='m-auto pt-4 pb-4' lg={6}>
          <InputForm setNameData={handleName} setNumberData={handleNumbers}/>
        </Col>
        { name !== "" && (
        <Col lg={12}>
          <h6>Chaldean Name Numerology Reading of {name}</h6>
          <p>Name - {name}</p>
          <p>Numbers - {numbersArr}</p>
          <h5>Compound Name Number/Namank (Numerology Total of Your Name): {total}</h5>
        </Col>
    )}
      </Row>
      </Card>

      { name !== "" && <Result total={total} name={name}/> }

      <Row>
        <Table />
      </Row>
      </Container>
    </Container>
    </div>
  );
}

export default App;
