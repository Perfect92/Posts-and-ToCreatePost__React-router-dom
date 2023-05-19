import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ToCreatePostPage = () => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  const  handleSubmit = (e)=>{
    e.preventDefault()
    alert(`Title : ${post.title}
Body : ${post.body}

Thanks for the post!!!`)
  }

  const handleTitleChange = (e)=>{
    setPost({...post, title: e.target.value})
  }
  const handleBodyChange = (e)=>{
    setPost({...post, body: e.target.value})
  }

  useEffect(()=>{
    axios.post('https://jsonplaceholder.typicode.com/posts',{post})
  .then((response) => {
    console.log(response.data)
  })
  .catch((error)=>{
    console.error(error)
  })
  },[post])


  return (
    <form className='ToCreatePost' onSubmit={handleSubmit}>
        <h3 className='title'>To Create Post </h3>
        <input style={{padding: '15px'}} value={post.title} type="text" placeholder='Title' onChange={handleTitleChange}/>
        <input  style={{padding: '15px'}} value={post.body} type="text"  placeholder='Body' onChange={handleBodyChange}/> 
      <button type='submit' style={{marginLeft: "605px ",marginTop:"30px"}}>New Post</button>
    </form>
  )
}
