import { Col, Container, Row } from "react-bootstrap";
import AlbumGallery from "./AlbumGallery";

const MainSection = () => {
  return (
    <Container fluid>
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

          <AlbumGallery title="Rock Classics" artistName="Queen" />
          <AlbumGallery title="Pop Culture" artistName="Eminem" />
          <AlbumGallery title="Hip Hop" artistName="Katy Perry" />
        </main>
      </Row>
    </Container>
  );
};

export default MainSection;
