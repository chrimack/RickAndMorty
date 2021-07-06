import React from 'react';
import * as Styles from '../../../styles/styles.js';

const CharacterProfile = ({ character }) => {

  return (
    <>
      <Styles.CharacterProfile>

        <Styles.CharThumbnail src={character.image} />

        <Styles.CharacterBrief>

          <Styles.CharName>{character.name}</Styles.CharName>
          <Styles.CharText>
            Status: {character.status}
          </Styles.CharText>

        </Styles.CharacterBrief>

      </Styles.CharacterProfile>
    </>
  );
};

export default CharacterProfile;