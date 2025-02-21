export const SELECT_TRACK = "SELECT_TRACK";
export const GALLERY_TRACK = "GALLERY_TRACK";

export const MusicSectionAction = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
      if (response.ok) {
        let { data } = await response.json();

        const topTracks = data.slice(0, 4);

        dispatch({ type: GALLERY_TRACK, payload: topTracks });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.error("error", err);
    }
  };
};
