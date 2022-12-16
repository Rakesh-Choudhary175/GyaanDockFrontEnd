import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  const navigate = useNavigate();

  

  function fetchHomepageCards(){
    return (
      <Row>
        <Col style={{
          backgroundColor: 'red',
        }}>
          Sample First Col
      </Col>
        <Col style={{
          backgroundColor: 'yellow',
        }}>
          Sample Second Col
      </Col>
        <Col style={{
          backgroundColor: 'green',
        }}>
          Sample Third Col
      </Col>
      </Row>
    );
  }

  return (
    <div >
      <Header/>
      {/* <Container>
      <Row>
        <Col ></Col>
        <Col>
          <h4>Welcome To Gyaandock.</h4>

        </Col>
      </Row>
      </Container> */}

      <br/>
      
      {
        fetchHomepageCards()
        
      }
    </div>
    // <Container>
    //   <Row className="justify-content-md-center">
    //     <Col xs lg="2">
    //       1 of 3
    //     </Col>
    //     <Col md="auto">Variable width content</Col>
    //     <Col xs lg="2">
    //       3 of 3
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col>1 of 3</Col>
    //     <Col md="auto">Variable width content</Col>
    //     <Col xs lg="2">
    //       3 of 3
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
