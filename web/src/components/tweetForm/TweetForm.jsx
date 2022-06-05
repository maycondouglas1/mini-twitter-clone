import React, { useState } from "react";
import Button from "../button/Button";

const TweetForm = () => {
  const MAX_TWEET_CHAR = 250
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="border-b border-silver p-4 space-y-6">
      <div className="flex space-x-5">
        <img src="" alt="avatar" className="w-7" />
        <h1 className="font-bold text-xl">Página Inicial</h1>
      </div>

      <form className="pl-12 text-lg flex flex-col">
        <textarea
          name="text"
          value={text}
          onChange={changeText}
          placeholder="O que está acontecendo?"
          //disabled={text.length > MAX_TWEET_CHAR}
          className="bg-transparent outline-none disabled:opacity-50"
        />

        <div className="flex justify-end items-center space-x-3">
          <span className="text-sm">
            <span>{text.length}</span> /{" "}
            <span className="text-birdBlue">{MAX_TWEET_CHAR}</span>
          </span>
          <Button text={text}>Tweetar</Button>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
