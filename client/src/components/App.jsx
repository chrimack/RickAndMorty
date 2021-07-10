import React from 'react';
import Navigation from './Navigation.jsx';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../../styles/styles.js';
import Footer from './Footer.jsx';


const App = () => {

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Footer />
    </>
  );
};

export default App;