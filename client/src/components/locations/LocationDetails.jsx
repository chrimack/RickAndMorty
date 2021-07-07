import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';
import CharacterList from '../characters/CharacterList.jsx';

const LocationDetails = () => {
  const [location, setLocation] = useState({});

  let { id } = useParams();
  const url = 'https://rickandmortyapi.com/api/location';

  useEffect(() => {
    axios.get(`${url}/${id}`)
      .then(res => {
        setLocation(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <Styles.displayContainer>

        <Styles.DetailsBox>

          <Styles.displayText size="1.5em">{location.name}</Styles.displayText>
          <Styles.displayText size="1.2em">
            Dimension: {location.dimension}
          </Styles.displayText>
          <Styles.displayText size="1.2em">
            Type: {location.type}
          </Styles.displayText>

        </Styles.DetailsBox>

      </Styles.displayContainer>

      {location.residents ? (
        <CharacterList residents={location.residents} />
      ) : null}

    </>
  );
};

export default LocationDetails;

