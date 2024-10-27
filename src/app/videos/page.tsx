"use client";
import React from "react";
import { mockVideos } from "../data/mockVideos";
import { Video } from "../types/video";
import VideoCard from "./components/videoCard/videoCard";

const VideosList = () => {
  const videos: Array<Video> = mockVideos;
  return (
    <div>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideosList;
