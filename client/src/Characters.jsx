import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { allCharacters } from './data.js';
import * as Styles from '../styles/styles.js';

const Characters = () => {
  const [display, setDisplay] = useState('A');



  return (
    <>
      {/* render letters */}
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
          })
        }
      </Styles.flexWidth>
      <Styles.charList>
        {allCharacters[display].map((character, i) => {
          return (
            <span
              key={i}
              title={character.id}
              onClick={(e) => console.log(e.target.title)}
            >
              {character.name}
            </span>
          );
        })}
      </Styles.charList>
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