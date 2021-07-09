import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';
import EpisodesList from '../episodes/EpisodesList.jsx';

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const [location, setLocation] = useState('');
  const [origin, setOrigin] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [summary, setSummary] = useState('');

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

    axios.get(`/characters/${id}`)
      .then(res => {
        if (res.data.length) {
          setCharacter(prev => {
            return {...prev, summary: res.data[0].summary};
          });
        }
      })
      .catch(e => console.log(e));
  }, []);

  const handleClick = () => {
    setCharacter(prev => {
      return {...prev, summary: summary};
    });

    setShowInput(false);

    let info = {
      name: character.name,
      _id: id,
      summary: summary,
    };

    axios.post(`/characters/${id}`, info)
      .then(res => console.log(res))
      .catch(e => console.log(e));
  };

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

                <Styles.displayText size="1.5em">Location: </Styles.displayText>
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

                <Styles.displayText size="1.5em">Origin: </Styles.displayText>
                <Styles.displayText size="1.2em">{character.origin.name}</Styles.displayText>

              </Styles.flexBox>

            </Styles.divLink>
          )}

          <Styles.flexBox
            align="flex-start"
            padding="0 5px 5px 0">

            <Styles.displayText size="1.5em">Summary: </Styles.displayText>

            {character.summary ? (
              <Styles.flexWidth
                width="100%"
                justify="flex-start">

                <Styles.displayText size="1.2em">{character.summary}</Styles.displayText>

              </Styles.flexWidth>
            ) : (
              <Styles.flexWidth
                justify="space-between"
                width="100%">

                <Styles.displayText size="1.2em">Nothing to see here folks. </Styles.displayText>
                <Styles.Button
                  onClick={() => setShowInput(true)}>

                  <Styles.displayText
                    size="1em"
                    color="#233351">
                    Add a summary
                  </Styles.displayText>

                </Styles.Button>
              </Styles.flexWidth>
            )}

          </Styles.flexBox>

        </Styles.CharacterFull>

        {showInput && (
          <Styles.flexBox
            align="flex-start"
            margin="10px 0 0 0"
            padding="3px">

            <Styles.flexWidth
              justify="space-between"
              width="100%">

              <label htmlFor="summary">
                <Styles.displayText size="1.5em">Write a summary:</Styles.displayText>
              </label>

              <Styles.Button onClick={handleClick}>

                <Styles.displayText
                  size="1em"
                  color="#233351">
                  Push it
                </Styles.displayText>

              </Styles.Button>

            </Styles.flexWidth>

            <textarea
              style={{width: '100%', zIndex: '2'}}
              id="summary"
              rows="20"
              autoFocus
              placeholder="Tell us something we don't know..."
              onChange={(e) => setSummary(e.target.value)}
            />
          </Styles.flexBox>
        )}

      </Styles.CharacterProfile>

      <Styles.flexWidth width='100%' padding="5px 20px">

        {character.episode && (
          <EpisodesList charEpisodes={character.episode} />
        )}

      </Styles.flexWidth>

    </Styles.displayContainer>
  );
};

export default CharacterDetails;
