import React from "react";
import GoToVideoPage from "../goToVideo/goToVideo";
import "./videoCard.scss";
import { Video } from "@/app/types/video";
import Image from "next/image";

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="video-card">
      <h3>{video.title}</h3>
      <Image src={video.thumbnail} alt={video.title} width={500} height={500} />
      <GoToVideoPage videoId={video.id} youtubeId={video.youtubeId} />
    </div>
  );
};

export default VideoCard;
