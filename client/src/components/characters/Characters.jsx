import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { allCharacters } from '../../data.js';
import * as Styles from '../../../styles/styles.js';
import CharacterList from './CharacterList.jsx';



const Characters = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({
    species: '',
    status: ''
  });
  const [results, setResults] = useState(null);
  const [error, setError] = useState(false);

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

  const url = 'https://rickandmortyapi.com/api/character';

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

  const handleFilter = async (e) => {
    let type = e.target.parentNode.innerHTML.includes
    ('Status') ? 'status' : 'species';

    setFilter(prev => {
      return {...prev, [type]: e.target.value};
    });

  };

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
      >
        <Styles.flexBox
          direction="row"
          padding="4px"
        >
          <Styles.searchBar
            type="text"
            value={search}
            placeholder="search for your favorite character"
            onChange={(e) => setSearch(e.target.value)}
          ></Styles.searchBar>
          <i className="fas fa-search" onClick={handleSearch} ></i>
        </Styles.flexBox>

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
          padding="20px"
        >
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

    </>
  );
};

export default Characters;


// {
//   pathname: `/characters/${character.id}`,
//   state: { person: character.id }
// }