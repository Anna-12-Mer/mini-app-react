import './App.css';
import { BrowserRouter as Router ,  Switch,
          Route,
          Link} from "react-router-dom";
// Components
import Header from './components/header.js'; 

function App() {
  return (
    <Router>
        <Header/>
    </Router>

  );
}

export default App;
