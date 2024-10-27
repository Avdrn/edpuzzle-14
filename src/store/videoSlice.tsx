import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoState {
  videoId: string;
  youtubeId: string;
}

const initialState: VideoState = {
  videoId: "",
  youtubeId: "",
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideoId(state, action: PayloadAction<string>) {
      state.videoId = action.payload;
    },
    setYoutubeId(state, action: PayloadAction<string>) {
      state.youtubeId = action.payload;
    },
  },
});

export const { setVideoId, setYoutubeId } = videoSlice.actions;
export default videoSlice.reducer;
