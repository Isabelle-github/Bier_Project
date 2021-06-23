import Home from './components/Home';
import BierDetail from './components/BierDetail';
import './App.css';
import Biers from './components/Biers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* Mögliche Probleme: Reihenfolge!*/}
          <Route path="/" exact>
            {/* Mit exact sagen wir es muss genau so sein! */}
            <Home></Home>
          </Route>
          <Route path="/Biers/:BierID">
            {/* Mit exact sagen wir es muss genau so sein! */}
            <BierDetail></BierDetail>
          </Route>
          <Route path="/Biers" exact>
            {/* Mit exact sagen wir es muss genau so sein! */}
            <Biers></Biers>
          </Route>
          {/* 404 Component muss ganz ans Ende des Switches */}
          {/* <Route> */}
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
