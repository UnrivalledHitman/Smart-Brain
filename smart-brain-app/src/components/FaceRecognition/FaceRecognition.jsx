import PropTypes from "prop-types";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          className="image"
          id="inputimage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        {
          boxes.map((box, index) => (
            <div
              key={index}
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          ))
        }
      </div>
    </div>
  );
};

// Update prop types for multiple bounding boxes
FaceRecognition.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  boxes: PropTypes.arrayOf(
    PropTypes.shape({
      leftCol: PropTypes.number.isRequired,
      topRow: PropTypes.number.isRequired,
      rightCol: PropTypes.number.isRequired,
      bottomRow: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FaceRecognition;
