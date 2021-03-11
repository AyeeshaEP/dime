import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import './Footer.css';
import logo from "../assets/logo.png";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <div className="login">
              <Link className="loginLink" to='/login'>Login</Link>
              
              <Link className="loginLink" to='/register'>Sign Up</Link>
              </div>
        }
      </header>
      {props.children}
      <footer>
        <h3>By: Ayeesha Ellis</h3>
      </footer>
    </div>
  )
}