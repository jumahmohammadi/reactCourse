import {Routes,Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './pages/Header.jsx';


function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' Component={Home}></Route>   
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/about-us' Component={About}></Route>
        <Route path='*' Component={NotFound}></Route>
    </Routes>


	  

    </>
  )
}

export default App
