/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs';


const CounterBox = ({ start = 0, end = 100, duration = 2, label = '', styleclassName = 'stats-item' }) => {
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <div className={styleclassName}>
      <span
        className="purecounter"
        data-purecounter
        data-purecounter-start={start}
        data-purecounter-end={end}
        data-purecounter-duration={duration}
      ></span>
      <p>{label}</p>
    </div>
  );
};

export default CounterBox;