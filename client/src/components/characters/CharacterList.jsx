import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CharacterProfile from './CharacterProfile.jsx';
import * as Styles from '../../../styles/styles.js';
import useFetch from '../../hooks/useFetch.js';

const CharacterList = ({ residents }) => {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextpage] = useState('');

  const url = 'https://rickandmortyapi.com/api/character';

  // This sets the characters based on where the component was called from
  // if from nav link, gets first 20 characters
  // if from episodes or locations, get all characters from ep or loc
  useEffect(() => {
    return residents ? (
      Promise.all(residents.map(person => {
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

  const { loading, error, data, hasMore } = useFetch(nextPage);

  const observer = useRef();

  const lastCharacterRef = useCallback(char => {
    if (loading) { return; }
    if (observer.current) { observer.current.disconnect(); }

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setNextpage(data.info.next);
      }
    });

    if (char) { observer.current.observe(char); }
  });

  useEffect(() => {
    if (data.results) {
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