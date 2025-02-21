import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MusicSectionAction } from "../redux/actions";

const AlbumGallery = ({ title, artistName, TrackSelect }) => {
  const [likeTracks, setLikeTracks] = useState([]);

  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks.content);
  console.log(tracks);

  const toggleLike = (trackId) => {
    console.log(trackId);
    if (likeTracks.includes(trackId)) {
      setLikeTracks(likeTracks.filter((id) => id !== trackId));
    } else {
      setLikeTracks([...likeTracks, trackId]);
    }
  };

  useEffect(() => {
    console.log(artistName);
    if (artistName) {
      dispatch(MusicSectionAction(artistName));
    }
  }, [artistName, dispatch]);

  return (
    <Row className="mb-5 p-3 mt-4">
      <Col className="col-12">
        <div id="album-gallery">
          <h2 className="text-light">{title}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {tracks.map((track) => (
              <Col key={track.id} className="col mb-4">
                <div className="track-card" onClick={() => TrackSelect(track)}>
                  <img src={track.album.cover} alt={track.title} className="img-fluid" />
                  <p>{track.title}</p>
                  <button onClick={() => toggleLike(track.id)} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
                    <i className={`bi ${likeTracks.includes(track.id) ? "bi-heart-fill text-danger" : "bi-heart"}`} style={{ fontSize: "1.5rem" }}></i>
                  </button>
                </div>
              </Col>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AlbumGallery;
