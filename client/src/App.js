import { useState } from 'react';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';

import Layout from './layouts/Layout';
import Login from './screens/Login';
import { loginUser, registerUser } from './services/auth';
import Register from './screens/Register';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

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

  return (
    <Layout>
    <Switch>
      <Route path='/login'>
        <Login handleLogin={handleLogin}/>
      </Route>
      <Route path='/register'>
      <Register handleRegister={handleRegister}/>
      </Route>
      <Route path='/'>
       
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
