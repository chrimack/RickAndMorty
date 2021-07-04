import React, { useState, useEffect } from 'react';
import Characters from './Characters.jsx';
import Locations from './Locations.jsx';
import Episodes from './Episodes.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import * as Styles from '../styles/styles.js';

const Home = () => {

  return (
    <>
      <Styles.HomeGrid>
        <Styles.Countdown>

        </Styles.Countdown>

        <Styles.Links>

          <Styles.linkBox>
            <Link to="characters">Characters</Link>
            <Styles.thumbnail src={require('../dist/assets/characters.jpeg')} />
          </Styles.linkBox>

          <Styles.linkBox>
            <Link to="locations">Locations</Link>
            <Styles.thumbnail src={require('../dist/assets/locations.png')} />
          </Styles.linkBox>

          <Styles.linkBox>
            <Link to="episodes">Episodes</Link>
            {/* <Styles src={require('../dist/assets/episodes.jpg')} /> */}
          </Styles.linkBox>

        </Styles.Links>

      </Styles.HomeGrid>

      <Switch>
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
    </>
  );
};

export default Home;
