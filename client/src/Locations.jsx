import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    getLocations();
  }, []);

  return (
    <div></div>
  );
};

export default Locations;