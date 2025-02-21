import { GALLERY_TRACK } from "../actions";

const initialstate = {
  content: [],
};

const AlbumGalleryReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GALLERY_TRACK:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default AlbumGalleryReducer;
