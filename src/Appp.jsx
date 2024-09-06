import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Log from './Log';
import New from './New';
// import Data from './Data';
import Home from './Home';

function Appp() {
  return (
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/new" element={<New />} />
        <Route path="/home" element={<Home />} />

        {/* <Route path="/ne" element={<Data />} /> */}

      </Routes>
  
    </BrowserRouter>
  );
}

export default Appp;