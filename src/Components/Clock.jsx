import React from 'react'

function Clock() {

  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  function currentWeek(date) {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
    return Math.ceil((date.getDay() + 1 + numberOfDays) / 7)
  }
  return (
    <>
      <div className="clock-card clock">
        <div>
          {
            Intl.DateTimeFormat('en-UK', { hour: "numeric", minute: "numeric", second: "numeric", hour12: false })
              .format(date)
          }</div>
      </div>
      <div className="clock-card date-card">
        <div>
          {
            Intl.DateTimeFormat('en-UK', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
              .format(date)
          }</div>
        <div>
          Current Week: {currentWeek(date)}
        </div>
      </div>
    </>
  )
}

export default Clock
