import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const PostListPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => setPosts(response.data))
  },[])
  
  return (
    <div >
        <h3 className='title'>PostList Page</h3>
        {
          posts.map(p => (<div key={p.id}> 
          <h3 className='title-min'>Title</h3>
          <li style={{listStyleType: 'none',marginLeft:'400px'}} >{p.title}</li>  
          <h3 className='title-min'>Body</h3>
          <li style={{marginLeft:'400px' ,listStyleType: 'none', width: '600px'}} >{p.body}</li>
          </div>))
        }
    </div>
  )
      }
