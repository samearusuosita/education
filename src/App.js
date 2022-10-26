
import './App.css';
import Header from './Components/Commons/Heading/Header';
import { Routes, Route } from 'react-router-dom';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Commons/Home/Home';
import About from './Components/About/About';
import CoursesHome from './Components/AllCourses/CoursesHome';
import Team from './Components/Team/Team';
import Price from './Components/Pricing/Price';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <> 
    <Header/>
      <Routes>
        <Route>
          <Route exact path="/" element={<Home/>} /> 
          <Route exact path="/about" element={<About/>} /> 
          <Route exact path="/courses" element={<CoursesHome/>} /> 
          <Route exact path="/team" element={<Team/>} /> 
          <Route exact path="/pricing" element={<Price/>} /> 
          <Route exact path="/journal" element={<Blog/>} /> 
          <Route exact path="/contact" element={<Contact/>} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
