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
    <>


      <Router>
        <Styles.NavBackground>
          <Styles.Main>

            <Styles.NavBar>
              <Link to='/'>
                <Styles.Title src={require('../../dist/assets/title.png')} />
              </Link>

              <Styles.NavLinksList>
                <Styles.listItem>
                  <Styles.NavLink to="/">Home</Styles.NavLink>
                </Styles.listItem>
                <Styles.listItem>
                  <Styles.NavLink to="/characters">Characters</Styles.NavLink>
                </Styles.listItem>
                <Styles.listItem>
                  <Styles.NavLink to="/locations">Locations</Styles.NavLink>
                </Styles.listItem>
                <Styles.listItem>
                  <Styles.NavLink to="/episodes">Episodes</Styles.NavLink>
                </Styles.listItem>
              </Styles.NavLinksList>

            </Styles.NavBar>

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

          </Styles.Main>
        </Styles.NavBackground>
      </Router>
    </>
  );
};

export default Navigation;