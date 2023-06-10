import React, { useState, useEffect } from 'react';

function Timer() {
  const targetDate = new Date('2023-07-31'); // Set your target date here
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timerId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  function calculateRemainingTime() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      // Target date has passed
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div>
      <p>
        {remainingTime.days} days {remainingTime.hours} hours {remainingTime.minutes} minutes {remainingTime.seconds} seconds left
      </p>
    </div>
  );
}

export default Timer;
