import style, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { normalize } from 'styled-normalize';
import banner from '../dist/assets/banner.png';
import background from '../dist/assets/background.jpg';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
  }
`;

export const Main = style.div`
  font-family: 'Acme', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavBackground = style.div`
`;

export const NavBar = style.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 1000px;
  margin: 0 auto;
`;

export const NavLink = style(Link)`

`;

export const NavLinksList = style.ul`
  display: flex;
  width: 30vw;
  justify-content: space-between;
  list-style-type: none;
  margin-block: 0;
  padding-inline-start: 0;

`;

export const Title = style.img`
  height: 75px;
`;

export const HomeGrid = style.div`
  display: grid;
  max-width: 1000px;
  height: 1000px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 40% 30% 30%;
  margin: 10% auto;
  grid-template-areas:
    "countdown countdown countdown countdown"
    "links links links links"
    "trailer trailer trailer trailer";
`;

export const Countdown = style.div`
  grid-area: countdown;
  width: 100%;
`;

export const timer = style.div`
  display: flex;
  font-family: 'Syncopate', sans-serif;
`;

export const Links = style.div`
  grid-area: links;
  display: flex;
  justify-content: space-around;
  border: 1px solid;
`;

export const Trailer = style.div`
  grid-area: trailer;
`;

export const linkBox = style.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100px;
  border: 1px solid blue;
`;

export const link = style.a`
  font-size: 1em;

`;

export const thumbnail = style.img`
  width: 300px;
`;

export const flexWidth = style.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;
`;

export const smallFlexCol = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 30px 0 0;
  width: 150px;
`;

export const listItem = style.li`
  display: inline-block;
  list-style-type: none;
`;

export const listText = style.span`
  font-family:  'Big Shoulders Stencil Display', arial;
  color: red;
  display: block;
  font-size: 8em;
`;

export const displayList = style.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 25vh;
  width: 50vw;
  margin: 30px auto;
  align-content: space-around;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DetailsBox = style.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
`;

export const detailsName = style.div`
  font-size: 2em;
`;

export const charPic = style.img`
  width: 35vw;
  border-radius: 5%;
`;

export const flexBox = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const heading = style.div`
  font-family: 'Syncopate', sans-serif;
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const CharacterList = style.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: auto;
  height 70vw;
  padding-right: 10px;
`;

export const CharacterProfile = style.div`
  display: flex;
  flex-direction: column;
`;

export const CharacterBrief = style.div`
  display: flex;
  flex-direction: column;
  background: #233351;
  padding-left: 2px;
  opacity: .8;
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: white;
`;

export const CharName = style.h3`
  all: unset;
  font-size: 1.5em;
  opacity: unset;
`;

export const CharThumbnail = style.img`
  width: 280px;
`;

export const CharLink = style(Link)`
  height: fit-content;
  text-decoration: none;
  margin-bottom: 15px;
`;

export const CharText = style.p`
  all: unset;
  font-size: 1.2em;

  opacity: unset;
`;