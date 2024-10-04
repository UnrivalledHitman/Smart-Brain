import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="flex items-center justify-between pa3">
        <div className="flex items-center">
          <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{}}>
            <div className="Tilt-inner pa2">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/ios/35/brain--v1.png"
                alt="brain--v1"
              />
            </div>
          </Tilt>
        </div>
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black underline pointer navtop"
        >
          Sign Out
        </p>
      </nav>
    );
  }

  return null;
};

// Add PropTypes
Navigation.propTypes = {
  onRouteChange: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
};

export default Navigation;
