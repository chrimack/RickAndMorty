import style from 'styled-components';

export const NavBar = style.div`
  display: flex;

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
  height: 200px;
  width: 75%;
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
`;

export const listItem = style.li`
  display: inline-block;
  list-style-type: none;
  text-transform: uppercase;
`;

export const listText = style.span`
  display: block;
  font-size: 2em;
`;