import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';

const EpisodesList = ({ charEpisodes }) => {
  const [episodes, setEpisodes] = useState([]);
  const [nextPage, setNextpage] = useState(null);

  const url = 'https://rickandmortyapi.com/api/episode';

  const getEpisodes = () => {
    return charEpisodes ? (
      Promise.all(charEpisodes.map(episode => {
        return axios.get(episode);
      }))
        .then(res => {
          let newEpisodes = res.map(episode => {
            return episode.data;
          });

          setEpisodes(newEpisodes);
        })
        .catch(e => console.log(e))
    ) : (
      axios.get(url)
        .then(res => {
          setEpisodes(res.data.results);
          setNextpage(res.data.info.next);
        })
        .catch(e => console.log(e))
    );
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <>
      {episodes.length ? (
        <Styles.displayList
          width="100%"
          height="45vh"
        >
          {episodes.map(episode => {
            return (
              <Styles.divLink
                to={`/episodes/${episode.id}`}
                key={episode.id}
                width="100%"
              >

                <Styles.flexBox
                  align="flex-start"
                  border="1px solid white"
                >

                  <Styles.displayText size="1.5em">
                    {episode.name}
                  </Styles.displayText>
                  <Styles.displayText size="1.2em">
                    Air date: {episode.air_date}
                  </Styles.displayText>

                </Styles.flexBox>

              </Styles.divLink>
            );
          })}
        </Styles.displayList>
      ) : null}
    </>
  );
};

export default EpisodesList;