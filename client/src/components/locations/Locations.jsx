import React, { useState, useEffect } from 'react';
import * as Styles from '../../../styles/styles.js';
import LocationsList from './LocationsList.jsx';

const Locations = () => {
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
          placeholder="search for your favorite location"
          onChange={(e) => setSearch(e.target.value)}
        ></Styles.searchBar>
        <i className="fas fa-search" onClick={handleSearch} ></i>
      </Styles.flexBox>

      <LocationsList />

    </>
  );
};

export default Locations;
