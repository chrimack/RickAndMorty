import React from 'react';
import Home from './home/Home.jsx';
import Characters from './characters/Characters.jsx';
import Locations from './locations/Locations.jsx';
import Episodes from './episodes/Episodes.jsx';
import CharacterDetails from './characters/CharacterDetails.jsx';
import LocationDetails from './locations/LocationDetails.jsx';
import EpisodeDetails from './episodes/EpisodeDetails.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import * as Styles from '../../styles/styles.js';

const Navigation = () => {

  return (
    <Styles.Main>
      <Styles.Title src={require('../../dist/assets/title.png')} />

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
            <Route exact path="/episodes">
              <Episodes />
            </Route>
            <Route path='/characters/:id' component={CharacterDetails} />
            <Route path='/locations/:id' component={LocationDetails} />
            <Route path='/episodes/:id' component={EpisodeDetails} />
          </Switch>
        </div>
      </Router>
    </Styles.Main>
  );
};

export default Navigation;