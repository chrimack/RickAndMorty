import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';
import EpisodesList from '../episodes/EpisodesList.jsx';

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});

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

          <Styles.CharName>{character.name}</Styles.CharName>

          <Styles.flexWidth>

            <Styles.CharText>Status: {character.status}</Styles.CharText>
            <Styles.CharText>Species: {character.species}</Styles.CharText>
            { character.type ? (
              <Styles.CharText>Type: {character.type}</Styles.CharText>
            ) : null}

          </Styles.flexWidth>

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
