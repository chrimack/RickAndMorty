import React, { useState, useEffect } from 'react';
import { allCharacters } from '../../data.js';
import * as Styles from '../../../styles/styles.js';
import CharacterDetails from './CharacterDetails.jsx';

const Characters = () => {
  const [display, setDisplay] = useState('A');
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);

  const renderCharacter = (e) => {
    setId(e.target.title);
    setIsOpen(true);
  };

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
        <Styles.charList>
          {allCharacters[display].map((character, i) => {
            return (
              <span
                key={i}
                title={character.id}
                onClick={renderCharacter}
              >
                {character.name}
              </span>
            );
          })}
        </Styles.charList>
      </>
    );
  };

  return (
    <>
      {isOpen ? (
        <CharacterDetails type={'character'} id={id} setIsOpen={setIsOpen} />
      ) : (
        renderCharacterList()
      )}
    </>
  );
};

export default Characters;

// const renderChars = () => {
//   return Object.entries(allCharacters)
//     .map(([key, value], i) => {
//       return (
//         <div key={i}>
//           <strong>{key}</strong>
//           {value.map((character, j) => {
//             return (
//               <div key={j}>
//                 {character.name}
//               </div>
//             );
//           })}
//         </div>
//       );
//     });
// };