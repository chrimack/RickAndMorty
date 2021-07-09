import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';
import EpisodesList from './EpisodesList.jsx';
import Modal from '../modal/Modal.jsx';

const Episodes = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const url = 'https://rickandmortyapi.com/api/episode';

  const handleSearch = () => {
    if (!search) { return; }

    setError(false);

    axios.get(`${url}/?name=${search}`)
      .then(res => {
        if (res.error) {
          setError(true);
          return;
        } else {
          setResults(res.data);
        }
      })
      .catch(e => setError(true));

    setSearch('');
  };

  return (
    <>
      <Styles.flexBox
        direction="row"
        background="rgba(35, 51, 81, .8)"
        margin="0 0 10px 0">

        <Styles.flexBox
          direction="row"
          padding="4px">

          <Styles.searchBar
            type="text"
            value={search}
            placeholder="search for your favorite epidsode"
            onChange={(e) => setSearch(e.target.value)}
          ></Styles.searchBar>
          <Styles.icon className="fas fa-search" onClick={handleSearch} ></Styles.icon>
        </Styles.flexBox>

        {/* For adding new episodes */}
        {/* <Styles.Button onClick={() => setShowForm(true)}>add</Styles.Button> */}

      </Styles.flexBox>

      {error && (
        <Styles.flexBox
          background='rgba(35, 51, 81, .8)'
          padding="20px">

          <Styles.displayText size="3em">
            Do you see anything?
          </Styles.displayText>

          <img src={require('../../../dist/assets/nope.jpeg')} />

        </Styles.flexBox>
      )}

      {!error && results && (
        <EpisodesList results={results} />
      )}

      {!error && !results && (
        <EpisodesList />
      )}

      {showForm && <Modal type='episode' setShowForm={setShowForm} />}

    </>
  );
};

export default Episodes;