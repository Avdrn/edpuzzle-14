"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "./goToVideo.scss";
import { setVideoId, setYoutubeId } from "@/store/videoSlice";
import { useDispatch } from "react-redux";

interface GoToVideoPageProps {
  videoId: string;
  youtubeId: string;
}

const GoToVideoPage: React.FC<GoToVideoPageProps> = ({
  videoId,
  youtubeId,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setVideoId(videoId));
    dispatch(setYoutubeId(youtubeId));
  }, [videoId, youtubeId, dispatch]);

  return (
    <div>
      <Link href={`/videos/video/${videoId}`} className="button">
        Go to video
      </Link>
    </div>
  );
};

export default GoToVideoPage;
