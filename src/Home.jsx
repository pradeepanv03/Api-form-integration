import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const data = localStorage.getItem('sname');
    const navi = useNavigate();
    if(data == 'null'){
        navi('/')
    }
   
  return (
    <div>Home</div>
  )
}
