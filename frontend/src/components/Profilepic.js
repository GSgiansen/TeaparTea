import React from 'react'
import s from "../styles/Profilepic.css"
const profilepic = () => {
  return (
    <div className="dp">
        <img className="pic" src='./profilepiccat.jpeg'></img>
        <div className='bio'>
            Username
            <br></br>
            Loving turtles
            <br></br>
            Number of posts
            <br></br>
        </div>
    </div>
  )
}

export default profilepic