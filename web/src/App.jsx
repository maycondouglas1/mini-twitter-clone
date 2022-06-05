import React, { useState } from 'react';
import Tweet from './components/tweet/Tweet';
import TweetForm from './components/tweetForm/TweetForm';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const App = () => {
  const [user, setUser] = useState("")

  return (
    <div>
      {user ? <Home /> : <Login signInUser={setUser}/>}
    </div>
  );
};

export default App;
