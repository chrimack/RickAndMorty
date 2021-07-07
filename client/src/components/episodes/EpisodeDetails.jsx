import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';
import CharacterList from '../characters/CharacterList.jsx';

const EpisodeDetails = () => {
  const [episode, setEpisode] = useState({});

  let { id } = useParams();
  const url = 'https://rickandmortyapi.com/api/episode';

  useEffect(() => {
    axios.get(`${url}/${id}`)
      .then(res => {
        setEpisode(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <Styles.displayContainer>

        <Styles.DetailsBox>

          <Styles.displayText size="1.5em">{episode.name}</Styles.displayText>
          <Styles.displayText size="1.2em">
            Air date: {episode.air_date}
          </Styles.displayText>
          <Styles.displayText size="1.2em">
            Episode: {episode.episode}
          </Styles.displayText>

        </Styles.DetailsBox>

      </Styles.displayContainer>

      {episode.characters ? (
        <CharacterList residents={episode.characters} />
      ) : null}

    </>
  );
};

export default EpisodeDetails;
