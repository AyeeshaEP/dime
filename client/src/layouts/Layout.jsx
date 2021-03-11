import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import './Footer.css';
import './Layout.css';
import logo from "../assets/logo.png";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="App">
      <header>
       <Link to="/"> <img src={logo} alt="logo" /> </Link>
        {
          currentUser ?
            <div className="login">
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
            :
            <div className="login">
              <Link className="loginLink" to='/login'>Login</Link>
              
              <Link className="loginLink" to='/register'>Sign Up</Link>
              </div>
        }
      </header>
      <div className="body">{props.children}</div>
      <footer>
        <h3>By: Ayeesha Ellis</h3>
      </footer>
    </div>
  )
}