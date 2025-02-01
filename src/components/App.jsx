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
import Style from './Style.jsx';
import Register from './Register.jsx';
import Effect from './Effect.jsx';
import Products from './Products/Products.jsx';
import SingleComponent from './Products/SingleComponent.jsx';
import ComponentA from './Context/ComponentA.jsx';
import Reducer from './Reducer/Reducer.jsx';


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
        <Route path='/style' Component={Style}></Route>
        <Route path='/register' Component={Register}></Route>
        <Route path='/use-effect' Component={Effect}></Route>
        <Route path='/products' Component={Products}></Route>
        <Route path='/product/:product_id' Component={SingleComponent}></Route>
        <Route path='/context' Component={ComponentA}></Route>
        <Route path='/reducer' Component={Reducer}></Route>
        <Route path='*' Component={NotFound}></Route>
    </Routes>


	  

    </>
  )
}

export default App
