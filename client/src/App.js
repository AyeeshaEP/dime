import { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';

import Layout from './layouts/Layout';
import Login from './screens/Login';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import Register from './screens/Register';
import MainContainer from './containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser)
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    const currentUser = await loginUser(formData);
    setCurrentUser(currentUser);
    history.push('/');
  }

  const handleRegister = async (formData) => {
    const currentUser = await registerUser(formData);
    setCurrentUser(currentUser);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
   <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
    >
    <Switch>
      <Route path='/login'>
        <Login handleLogin={handleLogin}/>
      </Route>
      <Route path='/register'>
      <Register handleRegister={handleRegister} />
      </Route>
      <Route path='/'>
      <MainContainer currentUser={currentUser}/>
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
