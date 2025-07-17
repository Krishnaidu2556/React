import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import One from './One';
import Two from './Two';

function Ten() {
  return (

    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
         <li>
          <Link to="/About">Two</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<One/>} />
      <Route path="/" element={<Two/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Ten