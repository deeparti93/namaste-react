/** @format */

import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 shadow-md w-72 ">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url}></img>
      <p className="font-bold pb-2">{title}</p>
      <p>{channelTitle}</p>
      <p>{statistics.viewCount} views</p>
    </div>
  );
};

export default VideoCard;
