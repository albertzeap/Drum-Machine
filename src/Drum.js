import React from 'react'
import Keyboard from './Keyboard'

import "./Drum.css"

function Drum() {

  // Function for playing the audio when button is clicked
  const playSound = (key) => {
    console.log(key);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div id="drum-machine">
      <Keyboard  play={playSound}/>
    </div>
  )
}

export default Drum