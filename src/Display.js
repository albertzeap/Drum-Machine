import React from 'react'

function Display({key,id}) {
  const name = document.getElementById(id);
  console.log(name)

  return (
    <div className="display">
        <div id="pad"></div>
    </div>
  )
}

export default Display