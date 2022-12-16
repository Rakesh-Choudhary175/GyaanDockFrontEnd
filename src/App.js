import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';




function App() {

  const navigate = useNavigate();

  function getQuestions(){
    navigate('/questions')
  }
  return (
    <div>
      <Header/>
      <Container>
      <Row>
        <Col ></Col>
        <Col>
          <h4>Welcome To Gyaandock.</h4>

        </Col>
      </Row>
      </Container>
      <Button onClick={getQuestions}>See Questions</Button>
    </div>
  );
}

export default App;
