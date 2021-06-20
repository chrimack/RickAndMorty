import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [nextPage, setNextPage] = useState('');

  const getEpisodes = () => {
    axios.get('/episode')
      .then(res => {
        setEpisodes(res.data.results);
        setNextPage(res.data.info.next);
      });
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <div></div>
  );
};

export default Episodes;