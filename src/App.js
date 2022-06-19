import React from 'react';
import {Route,Routes} from "react-router-dom"
import Navs from './components/Navs';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Starrer from './pages/Starrer';

function App() {
  return (
    <div >
      <Navs/>
      <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path="/starrer" element={<Starrer/>}/>
       <Route path='*' element={<NoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
