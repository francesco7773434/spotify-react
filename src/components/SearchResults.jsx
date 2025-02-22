import { useEffect, useState } from "react";

import { Col, Row } from "react-bootstrap";

const SearchResults = ({ title, artistName }) => {
  const [tracks, setTracks] = useState([]);

  const fillMusicSection = async (artistName) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);

      if (response.ok) {
        let { data } = await response.json();

        setTracks(data.slice(0, 4));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    if (artistName) {
      fillMusicSection(artistName);
    }
  }, [artistName]);

  return (
    <Row className="mb-5 p-3 mt-4">
      <Col className="col-12">
        <div id="album-gallery">
          <h2 className="text-light">{title}</h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {tracks.map((track) => (
              <Col key={track.id} className="col mb-4">
                <div className="track-card">
                  <img src={track.album.cover} alt={track.title} className="img-fluid" />

                  <p>{track.title}</p>
                </div>
              </Col>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SearchResults;
