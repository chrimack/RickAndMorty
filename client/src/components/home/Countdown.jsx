import React, { useState, useEffect } from 'react';
import * as Styles from '../../../styles/styles.js';

const Countdown = () => {
  const calculateTimeLeft = () => {
    let airTime = new Date('Jul 11, 2021 22:00:00').getTime();
    let now = new Date().getTime();
    let timeLeft = {};

    let difference = airTime - now;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString(),
        minutes: Math.floor((difference / 1000 / 60) % 60).toString(),
        seconds: Math.floor((difference / 1000) % 60).toString()
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const renderTimer = () => {
    let intervals = Object.keys(timeLeft);

    return (
      <ul>
        {intervals.map(interval => {
          return (
            <Styles.listItem key={interval}>
              <Styles.listText>{timeLeft[interval].padStart(2, '0')}</Styles.listText>
              {interval}
            </Styles.listItem>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <h4>COUNTDOWN TO NEXT EPISODE:</h4>
      {renderTimer()}
    </>
  );
};

export default Countdown;

{ /* <span key={interval}>
  {timeLeft[interval].padStart(2, '0')}{' '}{interval[0]}
</span> */ }