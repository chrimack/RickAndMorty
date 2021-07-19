import React, { useState, useEffect } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Characters from '../characters/Characters.jsx';
import Locations from '../locations/Locations.jsx';
import Episodes from '../episodes/Episodes.jsx';
import Countdown from './Countdown.jsx';
import Trailer from './Trailer.jsx';
import Youtube from './Youtube.jsx';
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

            <Styles.NavLink
              to="characters"
              color="white"
              stroke=".5px black">
                Characters
            </Styles.NavLink>

            <Link to='/characters'>
              <Styles.thumbnail src={require('../../../dist/assets/characters.jpeg')} />
            </Link>

          </Styles.linkBox>

          <Styles.linkBox>

            <Styles.NavLink
              to="locations"
              color="white"
              stroke=".5px black">
                Locations
            </Styles.NavLink>

            <Link to='/locations'>
              <Styles.thumbnail src={require('../../../dist/assets/locations.png')} />
            </Link>

          </Styles.linkBox>

          <Styles.linkBox>

            <Styles.NavLink
              to="episodes"
              color="white"
              stroke=".5px black">
                Episodes
            </Styles.NavLink>

            <Link to='/episodes'>
              <Styles.thumbnail src={require('../../../dist/assets/episodes.png')} />
            </Link>

          </Styles.linkBox>

        </Styles.Links>

        <Styles.Trailer>
          <Styles.wrapper>

            <Styles.frame>

              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="RickandMorty"
                options={{height: 480, width: 500}}
              />

            </Styles.frame>

            <Styles.frame>

              <Youtube />
            </Styles.frame>

          </Styles.wrapper>
        </Styles.Trailer>
        <Styles.clear></Styles.clear>

      </Styles.HomeGrid>

    </>
  );
};

export default Home;
