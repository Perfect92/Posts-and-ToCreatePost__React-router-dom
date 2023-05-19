import { Routes, Route, Link, NavLink } from 'react-router-dom'
import {AboutPage} from './pages/AboutPage/AboutPage'
import {PostListPage} from './pages/PostListPage/PostListPage'
import  {ToCreatePostPage}  from './pages/ToCreatePostPage/ToCreatePostPage'
import Layout from './components/Layout/Layout'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<h3 className='title'>Home page</h3>}/>
        <Route path='about' element={<AboutPage/>} />
        <Route path='posts' element={<PostListPage/>} />
        <Route path='tocreatepost' element={<ToCreatePostPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App