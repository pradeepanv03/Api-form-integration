import React from "react";

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Nopage from "./Nopage";
import Home from "./Home";


export default function Main()
{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Nopage />} />
        <Route path="/home" element={<Home />} />




        </Routes>
        
        
        </BrowserRouter>
    )
}