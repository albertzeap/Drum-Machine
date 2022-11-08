import React from 'react'
import "./styles/KeyboardKey.css"

function KeyboardKey({play, sound: {key,id, url, keycode}}) {
    

    const buttonHit = [
      { transform: 'scale(1)' },
      { transform: 'scale(1.1)' }
    ];
    
    const buttonTime = {
      duration: 100
    }

    const handleClick = (key) => {
      play(key);
      const button = document.getElementById(id);
      const padDisplay = document.getElementById("pad");
      padDisplay.innerHTML = id;
      button.animate(buttonHit,buttonTime);
      
    }


    const handleKeyPress = (event) =>{
        if(event.keyCode === keycode){
          play(key);
          const button = document.getElementById(id);
          const padDisplay = document.getElementById("pad");
          padDisplay.innerHTML = id;
          button.animate(buttonHit,buttonTime);
         
         

        }
    }

    React.useEffect(() =>{
        document.addEventListener('keydown', handleKeyPress);
        // eslint-disable-next-line
    }, []);


  return (
    // Map through the soundPack with destructured soundPack 
    <button className="drum-pad" id={id} onClick={() => handleClick(key)}>
    {key}
    <audio className="clip" id={key} src={url}></audio>
    </button>
   
  )
}

export default KeyboardKey