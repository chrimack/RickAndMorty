import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';

const LocationsList = () => {
  const [locations, setLocations] = useState([]);
  const [nextPage, setNextpage] = useState(null);

  const url = 'https://rickandmortyapi.com/api/location';

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setLocations(res.data.results);
        setNextpage(res.data.info.next);
      })
      .catch(e => console.log(e));
  });

  return (
    <>
      {locations.length ? (
        <Styles.displayList
          height="65vh"
        >
          {locations.map(location => {
            return (
              <Styles.divLink
                to={`/locations/${location.id}`}
                key={location.id}
                width="100%"
              >

                <Styles.flexBox
                  align="flex-start"
                  border="1px solid white"
                  padding="0 5px"
                >

                  <Styles.displayText size="1.5em">
                    {location.name}
                  </Styles.displayText>
                  <Styles.displayText size="1.2em">
                    Dimension: {location.dimension}
                  </Styles.displayText>

                </Styles.flexBox>

              </Styles.divLink>
            );
          })}
        </Styles.displayList>
      ) : null}
    </>
  );
};

export default LocationsList;