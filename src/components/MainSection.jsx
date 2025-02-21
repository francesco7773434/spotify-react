import { Col, Container, Row } from "react-bootstrap";
import AlbumGallery from "./AlbumGallery";
import PlayerSection from "./PlayerSection";
import TopBar from "./TopBar";
import { useState } from "react";

const MainSection = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
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

          <AlbumGallery title="Rock Classics" artistName="Queen" onTrackSelect={handleTrackSelect} />
          <AlbumGallery title="Pop Culture" artistName="Eminem" onTrackSelect={handleTrackSelect} />
          <AlbumGallery title="Hip Hop" artistName="Katy Perry" onTrackSelect={handleTrackSelect} />
        </main>
      </Row>
      <PlayerSection selectedTrack={selectedTrack} />
    </Container>
  );
};

export default MainSection;
