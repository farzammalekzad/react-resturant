import Navbar from './component/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
        </Router>
    </div>
  );
}

export default App;
