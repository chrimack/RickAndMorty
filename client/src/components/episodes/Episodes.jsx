import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allEpisodes } from '../../data.js';
import * as Styles from '../../../styles/styles.js';
import EpisodeDetails from './EpisodeDetails.jsx';

const Episodes = () => {
  const [display, setDisplay] = useState('A');

  return (
    <>
      <Styles.flexWidth>

        {Object.keys(allEpisodes)
          .map(letter => {
            return (
              <span
                key={letter}
                onClick={(e) => setDisplay(e.target.innerHTML)}
              >
                {letter}
              </span>
            );
          })}

      </Styles.flexWidth>

      <Styles.displayList>

        {allEpisodes[display].map((episode, i) => {
          return (
            <span key={i}>
              <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
            </span>
          );
        })}

      </Styles.displayList>
    </>
  );
};

export default Episodes;