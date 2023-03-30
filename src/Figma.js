import React from 'react'
import Home from './Home';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Figma() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Figma;
