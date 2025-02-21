import shuffleImg from "../assets/playerbuttons/shuffle.png";
import prevImg from "../assets/playerbuttons/prev.png";
import playImg from "../assets/playerbuttons/play.png";
import nextImg from "../assets/playerbuttons/next.png";
import repeatImg from "../assets/playerbuttons/repeat.png";

const PlayerSection = () => {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffleImg} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prevImg} alt="prev" />
                </a>
                <a href="#">
                  <img src={playImg} alt="play" />
                </a>
                <a href="#">
                  <img src={nextImg} alt="next" />
                </a>
                <a href="#">
                  <img src={repeatImg} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSection;
