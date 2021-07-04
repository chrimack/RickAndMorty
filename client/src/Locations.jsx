import React, { useState, useEffect } from 'react';
import axios from 'axios';
import all from './data.js';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [nextPage, setNextPage] = useState('');

  const getLocations = () => {
    axios.get('/location')
      .then(res => {
        setLocations(res.data.results);
        setNextPage(res.data.info.next);
      });
  };

  useEffect(() => {
    if (nextPage) {
      axios.get(nextPage)
        .then((res) => {
          setLocations(prev => {
            return [...prev, ...res.data.results];
          });
          setNextPage(res.data.info.next);
        });
    }
    if (!nextPage) {
      console.log(locations);
    }
  }, [nextPage]);

  useEffect(() => {
    getLocations();
    console.log(all);
  }, []);

  return (
    <div></div>
  );
};

export default Locations;
