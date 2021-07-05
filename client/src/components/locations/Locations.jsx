import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allLocations } from '../../data.js';
import * as Styles from '../../../styles/styles.js';

const Locations = () => {
  const [display, setDisplay] = useState('A');

  return (
    <>
      <Styles.flexWidth>

        {Object.keys(allLocations)
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

        {allLocations[display]
          .map((location, i) => {
            return (
              <span key={i}>
                <Link to={`locations/${location.id}`}>{location.name}</Link>
              </span>
            );
          })}

      </Styles.displayList>
    </>
  );
};

export default Locations;
