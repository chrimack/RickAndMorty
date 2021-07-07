import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { allCharacters } from '../../data.js';
import * as Styles from '../../../styles/styles.js';
import CharacterList from './CharacterList.jsx';



const Characters = () => {
  const [search, setSearch] = useState('');

  const url = 'https://rickandmortyapi.com/api/character';

  const handleSearch = () => {
    axios.get(`${url}/?name=${search}`)
      .then(res => {
        if (res.error) {
          //handle error for no results
          return;
        } else {
          setCharacters(res.data.results);
          setNextpage(res.data.info.next);
        }
      });

    setSearch('');
  };

  return (
    <>
      <Styles.flexBox
        direction="row"
        background="#233351"
      >
        <Styles.searchBar
          type="text"
          value={search}
          placeholder="search for your favorite character"
          onChange={(e) => setSearch(e.target.value)}
        ></Styles.searchBar>
        <i className="fas fa-search" onClick={handleSearch} ></i>
      </Styles.flexBox>

      <CharacterList />

    </>
  );
};

export default Characters;


// {
//   pathname: `/characters/${character.id}`,
//   state: { person: character.id }
// }