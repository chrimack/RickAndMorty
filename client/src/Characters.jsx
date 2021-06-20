import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState('');

  const getCharacters = () => {
    axios.get('/character')
      .then(res => {
        setCharacters(res.data.results);
        setNextPage(res.data.info.next);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div></div>
  );
};

export default Characters;