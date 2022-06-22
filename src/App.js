import React from 'react';
import {Route,Routes} from "react-router-dom"
import Show from './pages/Show'
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Starrer from './pages/Starrer';

function App() {
  return (
  
     
      <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path="/starrer" element={<Starrer/>}/>
       < Route exact path='/show/:id' element={<Show/>}/>
       <Route path='*' element={<NoPage/>}/>
      </Routes>

  );
}

export default App;
