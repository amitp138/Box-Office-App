import React from 'react';
import {Route,Routes} from "react-router-dom"

import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Starrer from './pages/Starrer';

function App() {
  return (
  
     
      <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path="/starrer" element={<Starrer/>}/>
       <Route path='*' element={<NoPage/>}/>
      </Routes>

  );
}

export default App;
