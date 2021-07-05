import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';

const EpisodeDetails = () => {
  const [episode, setEpisode] = useState({});
  const [characters, setCharacters] = useState([]);

  let { id } = useParams();

  const getCharacters = (characters) => {
    if (!characters.length) {
      setCharacters([{
        id: 0,
        name: '¯\\_(ツ)_/¯'
      }]);
      return;
    }

    let characterIds = '';

    characters.forEach((char, i) => {
      let id = char.slice(char.lastIndexOf('/') + 1);
      if (i === char.length - 1) {
        characterIds += id;
      } else {
        characterIds = characterIds + id + ',';
      }
    });

    axios.get(`/character/${characterIds}`)
      .then(res => {
        let newCharacters = [];

        res.data.forEach(char => {
          let currentChar = {
            id: char.id,
            name: char.name
          };
          newCharacters.push(currentChar);
        });

        setCharacters(newCharacters);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    if (id) {
      axios.get(`/episode/${id}`)
        .then(res => {
          setEpisode(res.data);
          getCharacters(res.data.characters);
        })
        .catch(e => console.log(e));
    }
  }, []);

  return (
    <>
      <Styles.DetailsBox>

        <Styles.detailsName>
          <span>{episode.name}</span>
        </Styles.detailsName>

        <Styles.flexBox>
          <div>
            <ul>
              <li><strong>Air date: </strong>{episode.air_date}</li>
            </ul>
          </div>
          <div>
            <label>Characters: </label>
            <ul>
              {characters.map((character, i) => {
                return (
                  <li key={i}>
                    <Link to={`/characters/${character.id}`}>
                      {character.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Styles.flexBox>

        <div>
          <Link to='/episodes'>Back to episodes</Link>
        </div>

      </Styles.DetailsBox>
    </>
  );
};

export default EpisodeDetails;
