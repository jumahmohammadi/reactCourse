import {Routes,Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './pages/Header.jsx';
import Blog from './pages/blog/Blog.jsx';
import NewPosts from './pages/blog/NewPosts.jsx';
import VisitedPosts from './pages/blog/VisitedPosts.jsx';
import PostDetail from './pages/blog/PostDetail.jsx';
import Search from './pages/blog/Search.jsx';


function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' Component={Home}></Route>   
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/about-us' Component={About}></Route>
        <Route path='/blog' Component={Blog}>
           <Route path='recents' Component={NewPosts}></Route>
           <Route path='most-visited' Component={VisitedPosts}></Route>
        </Route>
        <Route path='/post-detail/:post_id' Component={PostDetail}></Route>
        <Route path='/search' Component={Search}></Route>
        <Route path='*' Component={NotFound}></Route>
    </Routes>


	  

    </>
  )
}

export default App
