import React from 'react'
import s from "../styles/Indivpost.css"
import {FaTimes} from 'react-icons/fa'
const Indivpost = ({id, userid,content,onDelete}) => {
  return (
    
    <div className='post'>

        <div className='userid'>{userid} <FaTimes onClick={()=> onDelete(id)}/></div>
        <p></p>
        <div className='content'>{content}</div>
    </div>
  )
}

export default Indivpost