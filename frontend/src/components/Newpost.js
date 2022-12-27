import React from 'react'
import s from "../styles/Indivpost.css"
import { useState } from 'react'
const Newpost = ({addPost,testID}) => {
  
    const onPost = () =>{
        addPost({title,body})
        setUserID(testID)
        setContent('')
    }
    const [title, setUserID] = useState(testID)
    const [body, setContent] = useState('')
  return (
    <div className='newpost'>
        <form>
        <div className='postheader'>
        <div className='posttext'>{testID} is spilling...</div>
        <button className='postbutton' type="button" onClick={onPost}>Post!</button>

              

        </div>
        <input 
        className='prompt'
        type="text"
        placeholder='Whats the tea today babe ?'
        value={body}
        onChange={(e) => setContent(e.target.value)}
        />
        </form>

    </div>
  )
}

export default Newpost