import { Col, Container, Row } from "react-bootstrap";
import AlbumGallery from "./AlbumGallery";
import PlayerSection from "./PlayerSection";
import TopBar from "./TopBar";

import { useDispatch, useSelector } from "react-redux";
import { SELECT_TRACK } from "../redux/actions";

const MainSection = () => {
  const selectedTrack = useSelector((state) => state.selectedTrack.content);
  const dispatch = useDispatch();

  console.log(selectedTrack);

  const handleTrackSelect = (track) => {
    console.log(track);
    dispatch({ type: SELECT_TRACK, payload: track });
  };

  return (
    <Container fluid>
      <TopBar />
      <Row>
        <main className="col-12 col-md-9 offset-md-3 mainPage">
          <Row>
            <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </Col>
          </Row>

          <AlbumGallery title="Rock Classics" artistName="Queen" TrackSelect={handleTrackSelect} />
          <AlbumGallery title="Pop Culture" artistName="Katy Perry" TrackSelect={handleTrackSelect} />
          <AlbumGallery title="Hip Hop" artistName="Eminem" TrackSelect={handleTrackSelect} />
        </main>
      </Row>
      <PlayerSection selectedTrack={selectedTrack} />
    </Container>
  );
};

export default MainSection;
