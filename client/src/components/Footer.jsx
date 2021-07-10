import React from 'react';
import { Link } from 'react-router-dom';
import * as Styles from '../../styles/styles.js';

const Footer = () => {

  return (
    <Styles.Footer>

      <Styles.displayText size="2em" color="white">
        Connect:
        <a href="https://github.com/chrimack">
          <Styles.linkIcon className="fab fa-github-square" />
        </a>

        <a href="https://www.linkedin.com/in/chris-mcclelland-53879418b/">
          <Styles.linkIcon className="fab fa-linkedin" />
        </a>
      </Styles.displayText>

    </Styles.Footer>
  );
};

export default Footer;

