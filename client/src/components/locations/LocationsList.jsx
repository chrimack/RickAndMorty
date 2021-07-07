import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';
import useFetch from '../../hooks/useFetch.js';

const LocationsList = ({ results }) => {
  const [locations, setLocations] = useState([]);
  const [nextPage, setNextpage] = useState('https://rickandmortyapi.com/api/location');

  const url = 'https://rickandmortyapi.com/api/location';

  useEffect(() => {
    // axios.get(url)
    //   .then(res => {
    //     setLocations(res.data.results);
    //     setNextpage(res.data.info.next);
    //   })
    //   .catch(e => console.log(e));

    if (results) {
      setLocations(results.results);
      setNextpage(results.info.next);
    }
  }, [results]);

  const { loading, error, data, hasMore } = useFetch(nextPage);

  const observer = useRef();

  const lastLocationRef = useCallback(loc => {
    if (loading) { return; }
    if (observer.current) { observer.current.disconnect(); }

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setNextpage(data.info.next);
      }
    });

    if (loc) { observer.current.observe(loc); }
  });

  useEffect(() => {
    if (data.results) {
      setLocations(prev => [...prev, ...data.results]);
    }
  }, [data.results]);

  return (
    <>
      {locations.length ? (
        <Styles.displayList
          height="65vh"
        >
          {locations.map((location, i) => {
            let ref = i === locations.length - 1 ? lastLocationRef : null;
            return (
              <Styles.divLink
                to={`/locations/${location.id}`}
                key={location.id}
                ref={ref}
                width="100%"
                padding="15px"
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