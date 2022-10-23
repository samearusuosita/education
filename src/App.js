
import './App.css';
import Header from './Components/Commons/Heading/Header';
import {
  BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Components/Commons/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Switch>
            <Route path="/" exact component={Home} /> 
          </Switch>
        </Router>

    </>
  );
}

export default App;
