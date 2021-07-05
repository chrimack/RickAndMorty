import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allEpisodes } from '../../data.js';
import * as Styles from '../../../styles/styles.js';

const Episodes = () => {
  const [display, setDisplay] = useState('S01');

  return (
    <>
      <Styles.flexWidth>

        {Object.keys(allEpisodes)
          .map((season, i) => {
            return (
              <span
                key={season}
                title={season}
                onClick={(e) => setDisplay(e.target.title)}
              >
                Season {i + 1}
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
