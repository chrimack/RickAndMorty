import React from 'react';
import Home from './Home.jsx';
import Characters from './Characters.jsx';
import Locations from './Locations.jsx';
import Episodes from './Episodes.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Navigation = () => {

  return (
    <div>
      <img src={require('../dist/assets/title.png')}></img>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/episodes">Episodes</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/characters">
              <Characters />
            </Route>
            <Route exact path="/locations">
              <Locations />
            </Route>
            <Route export path="/episodes">
              <Episodes />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Navigation;