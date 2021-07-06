import React, { useState, useEffect } from 'react';
import Characters from '../characters/Characters.jsx';
import Locations from '../locations/Locations.jsx';
import Episodes from '../episodes/Episodes.jsx';
import Countdown from './Countdown.jsx';
import Trailer from './Trailer.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import * as Styles from '../../../styles/styles.js';

const Home = () => {

  return (
    <>
      <Styles.HomeGrid>
        <Styles.Countdown>
          <Countdown />
        </Styles.Countdown>

        <Styles.Links>

          <Styles.linkBox>
            <Link to="characters">Characters</Link>
            <Styles.thumbnail src={require('../../../dist/assets/characters.jpeg')} />
          </Styles.linkBox>

          <Styles.linkBox>
            <Link to="locations">Locations</Link>
            <Styles.thumbnail src={require('../../../dist/assets/locations.png')} />
          </Styles.linkBox>

          <Styles.linkBox>
            <Link to="episodes">Episodes</Link>
            <Styles.thumbnail src={require('../../../dist/assets/episodes.png')} />
          </Styles.linkBox>

        </Styles.Links>

        <Styles.Trailer>
          <Trailer />
        </Styles.Trailer>

      </Styles.HomeGrid>

      {/* <Switch>
        <Route exact path="/characters">
          <Characters />
        </Route>
        <Route exact path="/locations">
          <Locations />
        </Route>
        <Route export path="/episodes">
          <Episodes />
        </Route>
      </Switch> */}
    </>
  );
};

export default Home;
