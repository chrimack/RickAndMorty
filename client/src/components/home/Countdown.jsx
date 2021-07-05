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

  return (
    <Styles.flexBox>

      <Styles.heading>
        COUNTDOWN TO NEXT EPISODE:
      </Styles.heading>

      <Styles.timer>

        {Object.keys(timeLeft).map(interval => {
          return (
            <Styles.smallFlexCol key={interval}>
              <Styles.listText>{timeLeft[interval].padStart(2, '0')}</Styles.listText>
              {interval.toUpperCase()}
            </Styles.smallFlexCol>
          );
        })}

      </Styles.timer>

    </Styles.flexBox>
  );
};

export default Countdown;
