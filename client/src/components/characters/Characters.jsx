import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';
import CharacterList from './CharacterList.jsx';
import Modal from '../modal/Modal.jsx';



const Characters = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({
    species: '',
    status: ''
  });
  const [results, setResults] = useState(null);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);

  let location = useLocation();

  const url = 'https://rickandmortyapi.com/api/character';

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') { handleSearch(); }
  };

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

  // const species = [
  //   'Human',
  //   'Alien',
  //   'Humanoid',
  //   'unknown',
  //   'Poopybutthole',
  //   'Mythological Creature',
  //   'Animal',
  //   'Robot',
  //   'Cronenberg',
  //   'Disease',
  //   'Planet'
  // ];
  // const status = ['Alive', 'Dead', 'Unknown'];


  // const handleFilter = async (e) => {
  //   let type = e.target.parentNode.innerHTML.includes
  //   ('Status') ? 'status' : 'species';

  //   setFilter(prev => {
  //     return {...prev, [type]: e.target.value};
  //   });

  // };

  // useEffect(() => {

  // }, [error, results]);

  // useEffect(() => {
  //   axios.get(`${url}/?species=${filter.species}$status=${filter.status}`)
  //     .then(res => {
  //       setResults(res.data.results);
  //     });
  // }, [isFiltered, filter]);


  return (
    <>
      <Styles.flexBox
        direction="row"
        background="rgba(35, 51, 81, .8)"
        margin="0 0 10px 0"
        radius="5px">

        <Styles.flexBox
          direction="row"
          padding="4px">

          <Styles.searchBar
            type="text"
            value={search}
            placeholder="search for your favorite character"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}>
          </Styles.searchBar>

          <Styles.icon className="fas fa-search" onClick={handleSearch} ></Styles.icon>

        </Styles.flexBox>

        {results && (
          <Styles.Button onClick={() => setResults(null)}>Clear search</Styles.Button>
        )}

        {/* This is for adding a new character */}
        {/* <Styles.Button onClick={() => setShowForm(true)}>add</Styles.Button> */}


        {/* This is for filtering */}
        {/* <div>
          <Styles.displayText>Filter by:</Styles.displayText>
          <label>
            Status
            <select
              value={filter.status}
              onChange={handleFilter}
            >
              <option value=''></option>
              {status.map(s => {
                return (
                  <option key={s} value={s}>{s}</option>
                );
              })}
            </select>
          </label>

          <label>
            Species
            <select
              value={filter.species}
              onChange={handleFilter}
            >
              <option value=''></option>
              {species.map(s => {
                return (
                  <option key={s} value={s}>{s}</option>
                );
              })}
            </select>
          </label>
        </div> */}


      </Styles.flexBox>

      {error && (
        <Styles.flexBox
          background='rgba(35, 51, 81, .8)'
          padding="20px">

          <Styles.displayText size="3em">
            Do you see any characters?
          </Styles.displayText>

          <img src={require('../../../dist/assets/nope.jpeg')} />
        </Styles.flexBox>
      )}

      {!error && results && (
        <CharacterList results={results} />
      )}

      {!error && !results && (
        <CharacterList />
      )}

      {showForm && <Modal type='character' setShowForm={setShowForm}/>}

    </>
  );
};

export default Characters;

