import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const App = () => {
  const [user, setUser] = useState("");

  if (user) {
    return <Home />
  }
  
  window.location.pathname === "/signup" 
    ? <SignUp signInUser={setUser} />
    : <Login signInUser={setUser} />
};

export default App;
