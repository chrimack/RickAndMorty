import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';

const CharacterDetails = ({ type, id }) => {
  const [info, setInfo] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [currentLocation, setCurrentLocation] = useState('');
  const [origin, setOrigin] = useState('');

  const getEpisodesAndLocations = (episodes, location, origin) => {
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
    axios.get(`/${type}/${id}`)
      .then(res => {
        setInfo(res.data);
        getEpisodesAndLocations(res.data.episode, res.data.location, res.data.origin);
      })
      .catch(e => console.log(e));
  }, []);

  // useEffect(() => {

  // }, [info]);

  return (
    info.name ? (
      <Styles.charDetails>

        <Styles.charPic src={info.image} alt={info.name} />
        <Styles.charName>
          <span>{info.name}</span>
        </Styles.charName>

        <Styles.flexBox>
          <div>
            <ul>
              <li><strong>Origin: </strong> {info.origin.name}</li>
              <li><strong>Current Location: </strong>{info.location.name}</li>
              <li><strong>Status: </strong>{info.status}</li>
              <li><strong>Species: </strong>{info.species}</li>
              {info.type ? <li><strong>Type: </strong>{info.type}</li> : null}

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

        <div>Back to characters</div>

      </Styles.charDetails>
    ) : null
  );
};

export default CharacterDetails;