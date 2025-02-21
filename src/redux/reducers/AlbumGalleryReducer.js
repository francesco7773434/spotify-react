const initialState = {
  queenTracks: [],
  eminemTracks: [],
  katyPerryTracks: [],
};

const AlbumGalleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GALLERY_TRACK_QUEEN":
      return {
        ...state,
        queenTracks: action.payload,
      };

    case "GALLERY_TRACK_EMINEM":
      return {
        ...state,
        eminemTracks: action.payload,
      };

    case "GALLERY_TRACK_KATY_PERRY":
      return {
        ...state,
        katyPerryTracks: action.payload,
      };

    default:
      return state;
  }
};

export default AlbumGalleryReducer;
