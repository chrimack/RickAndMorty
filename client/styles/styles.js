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
  margin: 0 auto 50px auto;
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
  justify-content: ${props => props.justify || 'space-around'};
  width: ${props => props.width || '70%'};
  margin: 0 auto;
  padding: ${props => props.padding};
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
  font-family: 'Big Shoulders Stencil Display', arial;
  color: red;
  -webkit-text-stroke: 1px black;
  display: block;
  font-size: 8em;
`;

export const displayList = style.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.height};
  width: ${props => props.width};
  margin: ${props => props.margin || '5px 0 0 0'};
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
  background-color: rgba(35, 51, 81, .8);
`;

export const displayText = style.p(props => ({
  all: 'unset',
  'font-size': props.size,
  color: props.color || 'white',
  '-webkit-text-stroke': '.5px black'
}));

export const DetailsBox = style.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100px;
  background-color: rgba(35, 51, 81, .8);
  width: 100%;
  margin: 10px auto;
  padding: 5px;

`;

export const detailsName = style.div`
  font-size: 2em;
`;

export const charPic = style.img`
  width: 35vw;
  border-radius: 5%;
`;

export const flexBox = style.div(props => ({
  display: 'flex',
  'flex-direction': props.direction || 'column',
  'align-items': props.align || 'center',
  background: props.background || 'none',
  'border-bottom': props.border,
  padding: props.padding,
  margin: props.margin
}));

export const heading = style.div`
  font-family: 'Syncopate', sans-serif;
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const CharacterList = style.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: auto;
  height 65vh;
  padding-right: 10px;
  margin-top: 10px;
`;

export const CharacterProfile = style.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || '280px'};
  margin-top: ${props => props.margin};
`;

export const CharacterBrief = style.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  padding-left: 2px;
  background-color: rgba(35, 51, 81, .8);
  color: white;
  -webkit-text-stroke: .5px black;
`;

export const CharacterFull = style.div`
  display: flex;
  flex-direction: column;
  padding-left: 2px;
  background-color: rgba(35, 51, 81, .8);
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: white;
`;

export const CharName = style.h3`
  all: unset;
  font-size: 1.5em;
  opacity: unset;
`;

export const CharThumbnail = style.img`
  width: ${props => props.width || '280px'};
`;

export const divLink = style(Link)`
  height: fit-content;
  text-decoration: none;
  margin: ${props => props.margin};
  width: ${props => props.width || 'fit-content'};
  padding-top: ${props => props.padding};
  transition: background-color .2s ease-in-out;

  :hover {
    background-color: rgba(35, 51, 81, 1);
  }
`;

export const CharText = style.p`
  all: unset;
  font-size: 1.2em;
  opacity: unset;
`;

export const searchBar = style.input`
  all: unset;
  width: 20vw;
  margin: 20px 5px 20px 0;
  color: white;
  font-size: 1.2em;
  padding: 5px;
  border-bottom: 1px solid white;
  transition: background-color .2s ease-in-out;

  :focus {
    background-color: rgba(35, 51, 81, 1);
  }
`;

export const displayContainer = style.div`
  display: flex;
  width: 100%;

`;