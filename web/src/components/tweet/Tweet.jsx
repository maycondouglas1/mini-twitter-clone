import React from "react";
import { HeartIcon } from "@heroicons/react/outline";

const Tweet = ({ name, username, avatar, children }) => {
  return (
    <div className="flex space-x-7 p-4 border-b border-silver ">
      <div>
        <img
          src=""
          alt="Avatar"
        />
      </div>
      <div>
        <span className="font-bold text-sm">{name}</span> {""}
        <span className="text-sm text-silver">@{username}</span>
        <p>{children}</p>
        <div className="flex space-x-1 text-silver text-sm items-center">
          <HeartIcon className="w-6 stroke-1" />
          <span>1.2K</span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
