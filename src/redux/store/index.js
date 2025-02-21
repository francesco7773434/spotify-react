import { combineReducers } from "redux";
import MainSectionReducer from "../reducers/MainSectionReducer";
import { configureStore } from "@reduxjs/toolkit";
import AlbumGalleryReducer from "../reducers/AlbumGalleryReducer";

const bigReducer = combineReducers({
  selectedTrack: MainSectionReducer,
  tracks: AlbumGalleryReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
