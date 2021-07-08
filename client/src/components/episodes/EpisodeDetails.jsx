import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';
import CharacterList from '../characters/CharacterList.jsx';

const EpisodeDetails = () => {
  const [episode, setEpisode] = useState({});
  const [image, setImage] = useState('');

  let { id } = useParams();
  const url = 'https://rickandmortyapi.com/api/episode';

  useEffect(() => {
    axios.get(`${url}/${id}`)
      .then(res => {
        setEpisode(res.data);
      })
      .catch(e => console.log(e));

    axios.get(`episodes/${id}`)
      .then(res => {
        if (res.data[0].image) {
          setEpisode(prev => {
            return {...prev, image: res.data[0].image};
          });
        }
      })
      .catch(res => console.log(res));
  }, []);

  return (
    <>
      <Styles.displayContainer>

        <Styles.flexWidth
          width="100%"
          justify="space-around"
          background="rgba(35,51,81,.8)">

          {episode.image &&
            <Styles.CharThumbnail
              src={episode.image}
              width="300px"
            />
          }

          <Styles.DetailsBox background="none">

            <Styles.displayText size="1.5em">{episode.name}</Styles.displayText>
            <Styles.displayText size="1.2em">
              Air date: {episode.air_date}
            </Styles.displayText>
            <Styles.displayText size="1.2em">
              Episode: {episode.episode}
            </Styles.displayText>

          </Styles.DetailsBox>
        </Styles.flexWidth>


      </Styles.displayContainer>

      {episode.characters ? (
        <CharacterList residents={episode.characters} />
      ) : null}

    </>
  );
};

export default EpisodeDetails;
