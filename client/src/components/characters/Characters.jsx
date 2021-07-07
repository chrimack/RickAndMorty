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
  const [isFiltered, setIsFiltered] = useState(false);
  const [results, setResults] = useState([]);

  const species = [
    'Human',
    'Alien',
    'Humanoid',
    'unknown',
    'Poopybutthole',
    'Mythological Creature',
    'Animal',
    'Robot',
    'Cronenberg',
    'Disease',
    'Planet'
  ];
  const status = ['Alive', 'Dead', 'Unknown'];

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

  const handleFilter = async (e) => {
    let type = e.target.parentNode.innerHTML.includes
    ('Status') ? 'status' : 'species';

    setFilter(prev => {
      return {...prev, [type]: e.target.value};
    });

    setIsFiltered(true);
  };

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
        background="#233351"
      >
        <div>
          <Styles.searchBar
            type="text"
            value={search}
            placeholder="search for your favorite character"
            onChange={(e) => setSearch(e.target.value)}
          ></Styles.searchBar>
          <i className="fas fa-search" onClick={handleSearch} ></i>
        </div>

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

      {isFiltered ? (
        <CharacterList residents={results} />
      ) : (
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