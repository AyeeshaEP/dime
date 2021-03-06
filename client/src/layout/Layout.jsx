import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div className="App">
      <header>
        <h1>Dime</h1>
        <Link to='/login'>Login/Register</Link>
      </header>
      {props.children}
    </div>
  )
}