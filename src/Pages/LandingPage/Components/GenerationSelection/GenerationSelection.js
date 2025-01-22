import React from "react";
import PropTypes from "prop-types";
import "./GenerationSelection.scss";
import { useNavigate } from "react-router-dom";
import List from "../../../../Components/List/List";

const GenerationSelection = ({ onThemeButton, onGamsatButton }) => {
  const navigate = useNavigate();

  const onItemClick = (index) => {
    // random button clicked
    if (index === 0) {
      navigate("/quote");

      // theme button clicked
    } else if (index === 1) {
      onThemeButton();

      // gamsat button clicked
    } else if (index === 2) {
      onGamsatButton();
    }
  };

  return (
    <section className="generate-section">
      <div className="generate">
        <div className="generate__title"> Generate Quotes </div>
        <div className="generate__selection-container">
          <List
            data={["Random", "Theme", "Past GAMSAT "]}
            onItemClick={onItemClick}
          />
        </div>
      </div>
    </section>
  );
};

GenerationSelection.propTypes = {
  onThemeButton: PropTypes.func,
  onGamsatButton: PropTypes.func,
};

// todo: delete unsued defaultProps
GenerationSelection.defaultProps = {
  data: [],
};

export default GenerationSelection;
