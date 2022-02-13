import React, { useState } from "react";

function App() {
  //set current time
  let time = new Date().toLocaleTimeString();
  //console.log(time);

  let [currentTime, setTime] = useState(time);

  //get current time when btn clicked
  function getCurrentTime() {
    setTime((currentTime = new Date().toLocaleTimeString()));
  }

  //execute for every second
  setInterval(getCurrentTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
