import React, { useState, useEffect } from 'react'

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  function formatTime() {
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const second = time.getSeconds();
    const meridiem = hour >= 12 ? 'PM' : 'AM';

    return `${padZero(hour)}:${padZero(minutes)}:${padZero(second)} ${meridiem}`;
  }

function padZero(number){
return (number < 10 ? "0" : "") + number;
}

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  )
}
