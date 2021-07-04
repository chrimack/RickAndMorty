import style from 'styled-components';

export const NavBar = style.div`
  display: flex;

`;

export const HomeGrid = style.div`
  display: grid;
  max-width: 1000px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 40% 30% 30%;
  grid-template-areas:
    "countdown countdown countdown countdown"
    "links links links links"
    ". . . .";
  margin: 10% auto;
`;

export const Countdown = style.div`
  grid-area: countdown;
`;

export const Links = style.div`
  grid-area: links;
  display: flex;
  justify-content: space-around;
  border: 1px solid;
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