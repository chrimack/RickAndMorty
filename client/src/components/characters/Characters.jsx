import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { allCharacters } from '../../data.js';
import * as Styles from '../../../styles/styles.js';
import CharacterDetails from './CharacterDetails.jsx';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextpage] = useState('');

  let people = undefined;
  let data = useLocation();
  if (data.state) {
    people = data.state.people;
  }

  useEffect(() => {
    //console.log(data);
    return people ? (
      Promise.all(people.map(person => {
        return axios.get(person);
      }))
        .then(res => {
          setCharacters(res.flatMap(person => {
            return person.data;
          }));
        })
    ) : (
      axios.get('https://rickandmortyapi.com/api/character')
        .then(res => setCharacters(res.data))
        .catch(e => console.log(e))
    );
  }, []);

  return (
    <>
    </>
  );
};

export default Characters;
