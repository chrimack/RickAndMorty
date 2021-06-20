import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [mains, setMains] = useState([]);
  const [nextPage, setNextPage] = useState('');

  const getCharacters = () => {
    axios.get('/character')
      .then(res => {
        setCharacters(res.data.results);
        setMains(res.data.results.slice(0, 5));
        setNextPage(res.data.info.next);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      {mains.map(character => {
        return (
          <img key={character.id} src={character.image} alt={character.name}></img>
        );
      })}
    </div>
  );
};

export default Characters;