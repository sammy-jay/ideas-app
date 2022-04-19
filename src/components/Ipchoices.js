import React from 'react'
import './Ipchoices.css'

const Ipchoices = ({Icon, text, desc}) => {
  return (
    <div className='ipchoice'>
        <Icon fontSize='30px'/>
        <h3>{text}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default Ipchoices