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
    // let currentLocationId = location.url.slice(location.url.lastIndexOf('/') + 1);
    // let originLocationId = origin.url.slice(origin.url.lastIndexOf('/') + 1);

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

    // axios.get(`/location/${currentLocationId}`)
    //   .then(res => setCurrentLocation(res.data.name))
    //   .catch(e => console.log(e));

    // axios.get(`/location/${originLocationId}`)
    //   .then(res => setOrigin(res.data.name))
    //   .catch(e => console.log(e));

  };

  useEffect(() => {
    axios.get(`/${type}/${id}`)
      .then(res => {
        setInfo(res.data);
        getEpisodesAndLocations(res.data.episode, res.data.location, res.data.origin);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    origin ? (
      <Styles.charDetails>
        <Styles.charPic src={info.image} alt={info.name} />
        <Styles.charName>
          <span>{info.name}</span>
        </Styles.charName>
        <div>
          <ul>
            <li>Origin: {info.origin.name}</li>
            <li>Current Location: {info.location.name}</li>
            <li>Status: {info.status}</li>
            <li>Species: {info.species}</li>
            <li>Type: {info.type}</li>
          </ul>
        </div>
        <div>
          <ul>
            {episodes.map((episode, i) => {
              return <li key={i}>{episode}</li>;
            })}
          </ul>
        </div>
        <div>Back to characters</div>
      </Styles.charDetails>
    ) : null
  );
};

export default CharacterDetails;