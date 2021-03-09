import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import './Footer.css';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="App">
      <header>
      <img src="../../assets/logo.png" alt="logo" />
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <>
            <Link to='/login'>Login</Link>
              <Link to='/register'>Sign Up</Link>
              </>
        }
      </header>
      {props.children}
      <footer>
        <h1>GitHub</h1>
      </footer>
    </div>
  )
}