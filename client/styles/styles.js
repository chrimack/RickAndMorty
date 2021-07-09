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
    cursor: default;
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
  all: unset;
  cursor: pointer;
  font-size: 1.5em;
  color: ${props => props.color || 'rgb(35, 51, 81)'};
  -webkit-text-stroke: ${props => props.stroke};

  :hover {
    color: #53abee;
    text-decoration: underline #53abee;
    -webkit-text-stroke: .5px rgb(35, 51, 81);
  }
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
`;

export const Trailer = style.div`
  grid-area: trailer;
`;

export const linkBox = style.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 250px;
  background-color: rgba(35, 51, 81, .8);
  padding: 10px;
  border-radius: 5px;
`;

export const link = style.a`
  font-size: 1em;

`;

export const thumbnail = style.img`
  width: 300px;
  margin: 1px;
  border: 1px solid transparent;
  transition: border-color .2s ease-in-out;

  :hover {
    border: 1px solid white;
  }
`;

export const flexWidth = style.div`
  display: flex;
  justify-content: ${props => props.justify || 'space-around'};
  width: ${props => props.width || '70%'};
  margin: 0 auto;
  padding: ${props => props.padding};
  background: ${props => props.background};
  border-radius: ${props => props.radius || '0'};
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
  border-radius: 5px;

`;

export const displayText = style.p(props => ({
  all: 'unset',
  'font-size': props.size || '1.2em',
  color: props.color || 'white',
  '-webkit-text-stroke': '.5px black'
}));

export const DetailsBox = style.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100px;
  background-color: ${props => props.background || 'rgba(35, 51, 81, .8)'};
  width: 100%;
  margin: 10px auto;
  border-radius: 5px;
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
  margin: props.margin,
  'border-radius': props.radius || '0'
}));

export const heading = style.div`
  font-family: 'Syncopate', sans-serif;
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 20px;
  color: rgb(35, 51, 81);
`;

export const CharacterList = style.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  overflow: auto;
  height 80vh;
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
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const CharacterFull = style.div`
  display: flex;
  flex-direction: column;
  padding-left: 2px;
  background-color: rgba(35, 51, 81, .8);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const CharName = style.h3`
  all: unset;
  font-size: 1.5em;
  opacity: unset;
`;

export const CharThumbnail = style.img`
  width: ${props => props.width || '280px'};
  border-radius: ${props => props.radius || '0'};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const divLink = style(Link)`
  height: fit-content;
  text-decoration: none;
  margin: ${props => props.margin};
  width: ${props => props.width || 'fit-content'};
  padding-top: ${props => props.padding};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.radius || '0'};
  transition: all .2s ease-in-out;

  :hover {
    background-color: rgba(35, 51, 81, 1);
    border-color: white;
  }
`;

export const CharText = style.p`
  all: unset;
  font-size: 1.2em;
  opacity: unset;
`;

export const searchBar = style.input`
  all: unset;
  cursor: text;
  width: 20vw;
  margin: 20px 5px 20px 0;
  color: white;
  font-size: 1.2em;
  padding: 5px;
  border-bottom: 1px solid white;
  transition: all .2s ease-in-out;

  :focus {
    background-color: rgba(35, 51, 81, 1);
    border-radius: 5px;
  }
`;

export const displayContainer = style.div`
  display: flex;
  width: 100%;
  border-radius: 5px;

`;

export const icon = style.i`
  cursor: pointer;
  transition: all .2s ease-in-out;
  margin: 3px;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 50%;
  transition: all .2s ease-in-out;

  :hover {
    color: white;
    border-color: white;
  }
`;

export const video = style.div`
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;
  height: 0;

`;

export const wrapper = style.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const frame = style.div`
  float: left;
  width: fit-content;
  margin: 10px 10px 10px 5px;
`;

export const clear = style.div`
  :before,
  :after {
    content: "";
    display: table;
  }
`;

export const Button = style.button`
  all: unset;
  background: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
  margin: 0px 6px 6px 0;
  cursor: pointer;
  transition: all .2s ease-in-out;

  :hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgb(35, 51, 81);
  }
`;

export const modalOverlay = style.div`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const modal = style.div`
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 700px;
  min-width: 700px;
  max-height: 850px;
  min-height: 850px;
  background-color: ${props => props.background};
  border: solid 1px white;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: default;
`;

