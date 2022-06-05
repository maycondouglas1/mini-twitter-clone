import React from 'react';
import Tweet from '../../components/tweet/Tweet';
import TweetForm from '../../components/tweetForm/TweetForm';

const Home = () => {
    return (
        <div>
            <TweetForm />
            <Tweet 
                name="Elon Musk" 
                username="elonmusk" 
                avatar="/src/images/avatar.png"
            >
                Primeiro post do twitter clone!
            </Tweet>
        </div>
    );
}
 
export default Home;