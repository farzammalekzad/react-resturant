import Navbar from './component/Navbar';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
