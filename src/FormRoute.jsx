import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import Rgister from './Rgister';

function Appp() {
  return (
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/reg" element={<Rgister />} />
        {/* <Route path="/new" element={<New />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Appp;