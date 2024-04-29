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

function App() {
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
          <InputForm />
        </Col>
      </Row>
      <Row>
        <Table />
      </Row>
    </Container>
    </div>
  );
}

export default App;
