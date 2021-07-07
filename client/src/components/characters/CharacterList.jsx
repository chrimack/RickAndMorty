import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CharacterProfile from './CharacterProfile.jsx';
import * as Styles from '../../../styles/styles.js';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextpage] = useState('');

  const url = 'https://rickandmortyapi.com/api/character';

  let people = undefined;
  let data = useLocation();
  if (data.state) {
    people = data.state.people;
  }

  // This sets the characters based on where the component was called from
  // if from nav link, gets first 20 characters
  // if from episodes or locations, get all characters from ep or loc
  useEffect(() => {
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
      axios.get(url)
        .then(res => {
          setCharacters(res.data.results);
          setNextpage(res.data.info.next);
        })
        .catch(e => console.log(e))
    );
  }, []);

  return (

    <Styles.CharacterList>
      {characters.map(character => {
        return (
          <Styles.divLink
            to={`/characters/${character.id}`}
            key={character.id}
          >
            <CharacterProfile
              character={character}
            />
          </Styles.divLink>
        );
      })}
    </Styles.CharacterList>

  );
};

export default CharacterList;