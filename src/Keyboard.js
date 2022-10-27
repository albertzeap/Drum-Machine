import React from 'react'
import KeyboardKey from './KeyboardKey';

const soundPack = [
    {
      keycode: 81,
      id: "Chord-1",
      key: 'Q',
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    },
  
    {
      keycode: 87,
      id: "Chord-2",
      key: 'W',
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },
  
    {
      keycode: 69,
      id: "Chord-3",
      key: 'E',
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },
  
    {
      keycode: 65,
      id: "Shaker",
      key: 'A',
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },
  
    {
      keycode: 83,
      id: "Open-HH",
      key: 'S',
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },
  
    {
      keycode: 68,
      id: "Closed-HH",
      key: 'D',
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },
  
    {
      keycode: 90,
      id: "Punchy-Kick",
      key: 'Z',
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },
  
    {
      keycode: 88,
      id: "Side-Stick",
      key: 'X',
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
  
    {
      keycode: 67,
      id: "Snare",
      key: 'C',
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }
  ]


// @Descrip: Generates the key buttons for the corresponding sounds
// @param destructured play function
// @Return: Button tag and audio tags
const Keyboard = ({play}) => {
    return soundPack.map((sound) => <KeyboardKey play={play} sound={sound}/> );
}

export default Keyboard