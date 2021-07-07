import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';
import useFetch from '../../hooks/useFetch.js';

const EpisodesList = ({ charEpisodes, results }) => {
  const [episodes, setEpisodes] = useState([]);
  const [nextPage, setNextpage] = useState('https://rickandmortyapi.com/api/episode');

  const url = 'https://rickandmortyapi.com/api/episode';

  const getEpisodes = () => {
    if (charEpisodes) {
      Promise.all(charEpisodes.map(episode => {
        return axios.get(episode);
      }))
        .then(res => {
          let newEpisodes = res.map(episode => {
            return episode.data;
          });

          setEpisodes(newEpisodes);
        })
        .catch(e => console.log(e));
    }

    if (results) {
      setEpisodes(results.results);
      setNextpage(results.info.next);
    }

  };

  useEffect(() => {
    getEpisodes();
  }, [charEpisodes, results]);

  const { loading, error, data, hasMore } = useFetch(nextPage);

  const observer = useRef();

  const lastEpisodeRef = useCallback(episode => {
    if (loading) { return; }
    if (observer.current) { observer.current.disconnect(); }

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !charEpisodes) {
        setNextpage(data.info.next);
      }
    });

    if (episode) { observer.current.observe(episode); }
  });

  useEffect(() => {
    if (data.results && !charEpisodes) {
      setEpisodes(prev => [...prev, ...data.results]);
    }
  }, [data.results]);

  return (
    <>
      {episodes.length ? (
        <Styles.displayList
          height={charEpisodes ? 'fit-content' : '65vh'}
          width={charEpisodes ? '100%' : 'auto'}>

          {episodes.map((episode, i) => {
            let ref = i === episodes.length - 1 ? lastEpisodeRef : null;
            return (
              <Styles.divLink
                to={`/episodes/${episode.id}`}
                key={episode.id}
                ref={ref}
                width="100%"
                padding="15px">

                <Styles.flexBox
                  align="flex-start"
                  border="1px solid white"
                  padding="0 5px">

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