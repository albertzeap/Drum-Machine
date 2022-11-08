import React from 'react'
import Display from './Display'
import './styles/ControlPanel.css'

function ControlPanel() {
  return (
    <div className="control">
        <h1 className="drum-header">Drum Machine</h1>
        <Display />
    </div>
  )
}

export default ControlPanel
