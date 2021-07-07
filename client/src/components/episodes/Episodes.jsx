import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';
import EpisodesList from './EpisodesList.jsx';

const Episodes = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({});

  const handleSearch = () => {

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
          placeholder="search for your favorite episode"
          onChange={(e) => setSearch(e.target.value)}
        ></Styles.searchBar>
        <i className="fas fa-search" onClick={handleSearch} ></i>
      </Styles.flexBox>

      <EpisodesList />

    </>
  );
};

export default Episodes;