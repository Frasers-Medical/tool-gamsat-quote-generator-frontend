import React from "react";
import PropTypes from "prop-types";
import "./ToggleButton.scss";

const ToggleButton = ({ label, toggleState, setToggleState }) => {
  const handleToggleState = () => {
    setToggleState();
  };

  return (
    <div>
      <span className="toggle__label"> {label} </span>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="toggle" onClick={handleToggleState}>
        <div
          className={
            toggleState ? "toggle__bg toggle__bg--active" : "toggle__bg"
          }
        >
          {" "}
          &nbsp;{" "}
        </div>
        <div
          className={
            toggleState
              ? "toggle__circle toggle__circle--active"
              : "toggle__circle"
          }
        >
          {" "}
          &nbsp;{" "}
        </div>
      </div>
    </div>
  );
};

ToggleButton.propTypes = {
  label: PropTypes.string,
};

ToggleButton.defaultProps = {
  label: "default",
};

export default ToggleButton;
