import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { allCharacters } from '../../data.js';
import * as Styles from '../../../styles/styles.js';
import CharacterDetails from './CharacterDetails.jsx';
import CharacterProfile from './CharacterProfile.jsx';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextpage] = useState('');

  let people = undefined;
  let data = useLocation();
  if (data.state) {
    people = data.state.people;
  }

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
      axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          setCharacters(res.data.results);
          setNextpage(res.data.info.next);
        })
        .catch(e => console.log(e))
    );
  }, []);

  return (
    <>
      <Styles.CharacterList>
        {characters.map(character => {
          return (
            <Styles.CharLink
              to={`/characters/${character.id}`}
              key={character.id}
            >
              <CharacterProfile
                character={character}
              />
            </Styles.CharLink>
          );
        })}
      </Styles.CharacterList>
    </>
  );
};

export default Characters;
