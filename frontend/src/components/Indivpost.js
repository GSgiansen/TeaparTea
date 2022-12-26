import React from 'react'
import s from "../styles/Indivpost.css"

const Indivpost = ({userid,content}) => {
  return (
    
    <div className='post'>
        <div className='userid'>{userid}</div>
        <p></p>
        <div className='content'>{content}</div>
    </div>
  )
}

export default Indivpost