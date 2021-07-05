import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import * as Styles from '../../../styles/styles.js';

const LocationDetails = () => {
  const [location, setLocation] = useState({});
  const [characters, setCharacters] = useState([]);

  let { id } = useParams();

  const getCharacters = (characters) => {
    let characterIds = '';

    characters.forEach((char, i) => {
      let id = char.slice(char.lastIndexOf('/') + 1);
      if (i === char.length - 1) {
        characterIds += id;
      } else {
        characterIds = characterIds + id + ',';
      }
    });

    axios.get(`/character/${characterIds}`)
      .then(res => {
        let newCharacters = [];

        res.data.forEach(char => {
          let currentChar = {
            id: char.id,
            name: char.name
          };
          newCharacters.push(currentChar);
        });

        setCharacters(newCharacters);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    if (id) {
      axios.get(`/location/${id}`)
        .then(res => {
          setLocation(res.data);
          getCharacters(res.data.residents);
        })
        .catch(e => console.log(e));
    }
  }, []);

  return (
    <>
      <Styles.DetailsBox>

        <Styles.detailsName>
          <span>{location.name}</span>
        </Styles.detailsName>

        <Styles.flexBox>
          <div>
            <ul>
              <li><strong>Type: </strong>{location.type}</li>
              <li><strong>Dimension: </strong>{location.dimension}</li>
            </ul>
          </div>
          <div>
            <label>Residents:</label>
            <ul>
              {characters.map((character, i) =>{
                return (
                  <Link to={`/characters/${character.id}`} key={i}>
                    {character.name}
                  </Link>
                );
              })}
            </ul>
          </div>
        </Styles.flexBox>

      </Styles.DetailsBox>
    </>
  );
};

export default LocationDetails;