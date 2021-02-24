import './App.css';
import { BrowserRouter as Router ,  Switch,
          Route,
          Link} from "react-router-dom";


// Components
import Header from './components/header'; 
import Footer from './components/footer';
import Homepage from './components/homepage';

function App() {
  return (
    <Router>
        <Header/>
        <Homepage/>
        <Footer/>
    </Router>

  );
}

export default App;
