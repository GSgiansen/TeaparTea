import React from 'react'
import s from "../styles/Profilepic.css"
import { NavLink, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Profilepic = () => {
  const {state}= useLocation();
  const userID=state
  console.log(userID)
  return (
    <div className="dp">
        <img className="pic" src='./profilepiccat.jpeg'></img>
        <div className='bio'>
            {userID}
            <br></br>
            Loving turtles
            <br></br>
            Number of posts
            <br></br>
        </div>
    </div>
  )
}

export default Profilepic