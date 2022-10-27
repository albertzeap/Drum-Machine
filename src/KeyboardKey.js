import React from 'react'

function KeyboardKey({play, sound: {key,id, url, keycode}}) {
    
    const handleKeyPress = (event) =>{
        if(event.keyCode === keycode){
            play(key);
        }
    }

    React.useEffect(() =>{
        document.addEventListener('keydown', handleKeyPress);
    }, []);


  return (
    // Map through the soundPack with destructured soundPack 
    <button className="drum-pad" id={id} onClick={() => play(key)}>
    {key}
    <audio className="clip" id={key} src={url}></audio>
    </button>
   
  )
}

export default KeyboardKey