import React from 'react';

const Button = (props) => {
    const MAX_TWEET_CHAR = 250;

    return (
        <div>
            <button
                disabled={props.text.length > MAX_TWEET_CHAR}
                className={`bg-birdBlue px-5 py-3 rounded-full disabled:opacity-50 ${props.customStyle}`}
            >
            {props.children}
          </button>
        </div>
    );
}
 
export default Button;