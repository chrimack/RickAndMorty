import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CharacterProfile from './CharacterProfile.jsx';
import * as Styles from '../../../styles/styles.js';
import useFetch from '../../hooks/useFetch.js';

const CharacterList = ({ residents, results }) => {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextpage] = useState('https://rickandmortyapi.com/api/character');

  const url = 'https://rickandmortyapi.com/api/character';

  // This sets the characters based on where the component was called from
  // if from nav link, gets first 20 characters
  // if from episodes or locations, get all characters from ep or loc
  useEffect(() => {
    if (residents) {
      Promise.all(residents.map(person => {
        return axios.get(person);
      }))
        .then(res => {
          setCharacters(res.flatMap(person => {
            return person.data;
          }));
        })
        .catch(e => console.log(e));
    }

    if (results) {
      setCharacters(results.results);
      setNextpage(results.info.next);
    }

  }, [residents, results]);

  const { loading, error, data, hasMore } = useFetch(nextPage);

  const observer = useRef();

  const lastCharacterRef = useCallback(char => {
    if (loading) { return; }
    if (observer.current) { observer.current.disconnect(); }

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !residents) {
        setNextpage(data.info.next);
      }
    });

    if (char) { observer.current.observe(char); }
  });

  useEffect(() => {
    if (data.results && !residents) {
      setCharacters(prev => [...prev, ...data.results]);
    }
  }, [data.results]);



  return (
    <>
      <Styles.CharacterList>
        {characters.map((character, i) => {
          if (i === characters.length - 1) {
            return (
              <Styles.divLink
                to={`/characters/${character.id}`}
                key={character.id}
                ref={lastCharacterRef}
                margin='0 10px 15px 0'
              >
                <CharacterProfile
                  character={character}
                />
              </Styles.divLink>
            );
          } else {
            return (
              <Styles.divLink
                to={`/characters/${character.id}`}
                key={character.id}
                margin='0 10px 15px 0'
              >
                <CharacterProfile
                  character={character}
                />
              </Styles.divLink>
            );
          }
        })}
      </Styles.CharacterList>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </>
  );
};

export default CharacterList;