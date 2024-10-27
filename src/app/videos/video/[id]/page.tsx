"use client";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Video: React.FC = () => {
  const youtubeId = useSelector((state: RootState) => state.video.youtubeId);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
};

export default Video;
