import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [currentLocation, setCurrentLocation] = useState('');
  const [origin, setOrigin] = useState('');

  // get id from url
  let { id } = useParams();

  const getEpisodes = (episodes) => {
    let episodeIds = '';

    episodes.forEach((ep, i) => {
      let id = ep.slice(ep.lastIndexOf('/') + 1);
      if (i === episodes.length - 1) {
        episodeIds += id;
      } else {
        episodeIds = episodeIds + id + ',';
      }
    });

    axios.get(`/episode/${episodeIds}`)
      .then(res => {
        let newEpisodes = [];

        if (episodes.length > 1) {
          res.data.forEach(ep => {
            newEpisodes.push(ep.name);
          });
        } else {
          newEpisodes.push(res.data.name);
        }

        setEpisodes(newEpisodes);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    if (id) {
      axios.get(`/character/${id}`)
        .then(res => {
          setCharacter(res.data);
          getEpisodes(res.data.episode);
        })
        .catch(e => console.log(e));
    }
  }, []);

  return (
    character.name ? (
      <Styles.DetailsBox>

        <Styles.charPic src={character.image} alt={character.name} />
        <Styles.detailsName>
          <span>{character.name}</span>
        </Styles.detailsName>

        <Styles.flexBox>
          <div>
            <ul>
              <li><strong>Origin: </strong> {character.origin.name}</li>
              <li><strong>Current Location: </strong>{character.location.name}</li>
              <li><strong>Status: </strong>{character.status}</li>
              <li><strong>Species: </strong>{character.species}</li>
              {character.type ? <li><strong>Type: </strong>{character.type}</li> : null}

            </ul>
          </div>
          <div>
            <label>Episodes:</label>
            <ul>
              {episodes.map((episode, i) => {
                return <li key={i}>{episode}</li>;
              })}
            </ul>
          </div>
        </Styles.flexBox>

        <div>
          <Link to='/characters'>Back to characters</Link>
        </div>

      </Styles.DetailsBox>
    ) : null
  );
};

export default CharacterDetails;
