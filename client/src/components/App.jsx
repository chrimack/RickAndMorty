import React from 'react';
import Navigation from './Navigation.jsx';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../../styles/styles.js';


const App = () => {

  return (
    <>
      <GlobalStyle />
      <Navigation />
    </>
  );
};

export default App;