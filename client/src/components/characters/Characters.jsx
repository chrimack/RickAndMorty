import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allCharacters } from '../../data.js';
import * as Styles from '../../../styles/styles.js';
import CharacterDetails from './CharacterDetails.jsx';

const Characters = () => {
  const [display, setDisplay] = useState('A');

  const renderCharacterList = () => {
    return (
      <>
        {/* display all clickable letters */}
        <Styles.flexWidth>
          {Object.keys(allCharacters)
            .map(letter => {
              return (
                <span
                  key={letter}
                  onClick={(e) => setDisplay(e.target.innerHTML)}
                >
                  {letter}
                </span>
              );
            })}
        </Styles.flexWidth>

        {/* display all characters from displayed letter */}
        <Styles.displayList>
          {allCharacters[display].map((character, i) => {
            return (
              <span key={i}>
                <Link to={`/characters/${character.id}`}>{character.name}</Link>
              </span>
            );
          })}
        </Styles.displayList>
      </>
    );
  };

  return (
    <>
      {renderCharacterList()}
    </>
  );
};

export default Characters;
