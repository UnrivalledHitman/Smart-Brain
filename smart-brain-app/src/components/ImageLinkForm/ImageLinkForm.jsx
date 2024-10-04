import PropTypes from "prop-types";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="">
      <p className="f3 center">
        {`This Magic brain will detect faces in your pictures. Give it a try`}
      </p>
      <div className="center">
        <div
          className="pa4 br3 shadow-5 w-70 form"
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            type="text"
            className="f4 pa2 w-70 mb3"
            style={{ height: "40px", marginBottom: "0" }}
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            style={{ height: "40px", marginBottom: "0" }}
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

// Prop validation
ImageLinkForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onButtonSubmit: PropTypes.func.isRequired,
};

export default ImageLinkForm;
