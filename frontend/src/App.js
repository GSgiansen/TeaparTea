import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Wall from './components/Wall';
import Newpost from './components/Newpost';
import Indivpost from './components/Indivpost';
import { ChakraProvider } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const {state}= useLocation();
  const testID=state
  const [posts,setPosts]=useState([])
  const postsURL="http://localhost:3000/api/v1/posts"
  const cors = require("cors")

  //adds the post to the database and display on webstie
  const createPost = ({title,body,tag}) =>{
    console.log(tag)
  
    fetch(postsURL, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({title:title, body:body,tag:tag})
    })
    .then(response => response.json())
    .then((lol) => {
      console.log(lol)
      setPosts([...posts,lol.data])})

  }

  const addPost = ({title,body,tag}) => {
    console.log(tag)
    createPost({title,body,tag})

  }

  const delPost = (id) =>{
    fetch(postsURL+ `/${id}` ,{
      method:"DELETE"
    }
      ).then(() => setPosts(posts.filter((post) => post.id !== id)))

  }

  const fetchPostList  = () => {
    console.log("posts fetched")
    fetch(postsURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setPosts(data)
      })
  }

  const filterPostList = (tag) =>{
    setPosts(posts.filter((post) => post.tag === tag))
  }

  useEffect(() => {
    fetchPostList()},[]
  )

  return (

    <div className="App">
      <Navbar/>
      <header className="main-body">
      <Newpost addPost={addPost} testID={testID}/>
        <Wall posts={posts} onDelete={delPost}/>
      </header>
    </div>
  );
}

export default App;
