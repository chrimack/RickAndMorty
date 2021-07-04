import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { allCharacters } from './data.js';
import * as Styles from '../styles/styles.js';

const Characters = () => {



  return (
    <>
      <Styles.flexWidth>
        {Object.keys(allCharacters)
          .map(letter => {
            return (
              <span key={letter}>{letter}</span>
            );
          })
        }
      </Styles.flexWidth>
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