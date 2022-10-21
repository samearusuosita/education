
import './App.css';
import Header from './Components/Commons/Heading/Header';
import {
  BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        
            {/* <Route path="/about">
              <About />
            </Route> */}
          
      </Router>
    </div>
  );
}

export default App;
