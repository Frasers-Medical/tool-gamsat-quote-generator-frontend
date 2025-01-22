import React from "react";
import PropTypes from "prop-types";
import "./HiddenButton.scss";

const HiddenButton = ({
  titleLabel,
  visibleLabel,
  hiddenLabel,
  initialState,
  onButtonClick,
}) => {
  const [hiddenState, setHiddenState] = React.useState(initialState);

  const handleClick = () => {
    onButtonClick(hiddenState ^ 1);
    setHiddenState(hiddenState ^ 1);
  };

  return (
    <div className="hidden-button">
      {titleLabel} - &nbsp;
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="hidden-button__card" onClick={handleClick}>
        <div
          className={
            hiddenState
              ? "hidden-button__card__item hidden-button__card__item__visible"
              : "hidden-button__card__item hidden-button__card__item__visible hidden-button__card__item__visible--clicked"
          }
        >
          {" "}
          {visibleLabel}{" "}
        </div>
        <div
          className={
            hiddenState
              ? "hidden-button__card__item hidden-button__card__item__hidden"
              : "hidden-button__card__item hidden-button__card__item__hidden hidden-button__card__item__hidden--clicked"
          }
        >
          {" "}
          {hiddenLabel}{" "}
        </div>
      </div>
    </div>
  );
};

HiddenButton.propTypes = {
  titleLabel: PropTypes.string,
  visibleLabel: PropTypes.string,
  hiddenLabel: PropTypes.string,
  initialState: PropTypes.number,
  onButtonClick: PropTypes.func,
};

HiddenButton.defaultProps = {
  titleLabel: "title",
  visibleLabel: "visible",
  hiddenLabel: "hidden",
  initialState: 1,
  onButtonClick: () => 1,
};

export default HiddenButton;
