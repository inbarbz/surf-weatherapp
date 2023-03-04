import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import { HomePage } from './components/HomePage';

function App() {

  return (
    <Container style={{ margin: "0px", padding: "0px" }}>
      <HomePage />
    </Container>
  );
}

export default App;
