import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';
import EpisodesList from '../episodes/EpisodesList.jsx';

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const [location, setLocation] = useState('');
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    if (character.location) {
      let url = character.location.url;
      setLocation(url.slice(url.lastIndexOf('/') + 1));
    }

    if (character.origin) {
      let url = character.origin.url;
      setOrigin(url.slice(url.lastIndexOf('/') + 1));
    }
  }, [character]);

  const url = 'https://rickandmortyapi.com/api/character';

  // get id from url
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${url}/${id}`)
      .then(res => {
        setCharacter(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <Styles.displayContainer>
      <Styles.CharacterProfile width='350px' margin="10px">

        <Styles.CharThumbnail src={character.image} width="350px" />

        <Styles.CharacterFull>

          <Styles.displayText size="1.8em">{character.name}</Styles.displayText>

          <Styles.flexBox
            align="flex-start"
            padding="2px"
            border="1px solid white">

            <Styles.displayText
              size="1.2em">
              Status: {character.status}
            </Styles.displayText>
            <Styles.displayText
              size="1.2em">
              Species: {character.species}
            </Styles.displayText>
            { character.type && (
              <Styles.displayText
                size="1.2em">
                Type: {character.type}
              </Styles.displayText>
            )}

          </Styles.flexBox>

          {character.location && (
            <Styles.divLink
              to={`../locations/${location}`}
              width="100%"
              padding="5px">

              <Styles.flexBox
                align="flex-start"
                border="1px solid white">

                <Styles.displayText size="1.5em">Location:</Styles.displayText>
                <Styles.displayText size="1.2em">{character.location.name}</Styles.displayText>

              </Styles.flexBox>

            </Styles.divLink>

          )}

          {character.origin && (
            <Styles.divLink
              to={`../locations/${origin}`}
              width="100%"
              padding="5px">

              <Styles.flexBox
                align="flex-start"
                border="1px solid white">

                <Styles.displayText size="1.5em">Origin:</Styles.displayText>
                <Styles.displayText size="1.2em">{character.origin.name}</Styles.displayText>

              </Styles.flexBox>

            </Styles.divLink>
          )}

        </Styles.CharacterFull>

      </Styles.CharacterProfile>

      <Styles.flexWidth width='100%' padding="5px 20px">
        {character.episode ? (
          <EpisodesList charEpisodes={character.episode} />
        ) : null}

      </Styles.flexWidth>

    </Styles.displayContainer>
  );
};

export default CharacterDetails;
