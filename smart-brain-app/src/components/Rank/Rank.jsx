import PropTypes from "prop-types";
import "./Rank.css";

const Rank = ({ name, entries }) => {
  return (
    <div className="center container">
      <div className="white f3">{`${name}, your current entry count is...`}</div>
      <div className="white f3">{`${entries}`}</div>
    </div>
  );
};

Rank.propTypes = {
  name: PropTypes.string.isRequired,
  entries: PropTypes.number.isRequired,
};

export default Rank;
