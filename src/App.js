
import './App.css';
import Header from './Components/Commons/Heading/Header';
import { Routes, Route } from 'react-router-dom';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Commons/Home/Home';
import About from './Components/About/About';

function App() {
  return (
    <> 
    <Header/>
      <Routes>
        <Route>
          <Route exact path="/" element={<Home/>} /> 
          <Route exact path="/about" element={<About/>} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
