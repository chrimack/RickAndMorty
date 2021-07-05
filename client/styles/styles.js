import style from 'styled-components';

export const Main = style.div`
  font-family: sans-serif;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = style.img`
  width: 700px;

`;

export const HomeGrid = style.div`
  font-family: sans-serif;
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
  text-transform: uppercase;
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
  align-content: flex-start;
`;

export const heading = style.div`
  font-family: 'Syncopate', sans-serif;
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 20px;
`;