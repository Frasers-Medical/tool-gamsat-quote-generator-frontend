import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ChipList.scss";

const ChipList = ({ data, onItemClick }) => {
  const [clickedState, setClickedState] = useState(-1);

  const handleItemClick = (index) => {
    if (index === clickedState) {
      setClickedState(-1);
      onItemClick(-1);
    } else {
      onItemClick(index);
      setClickedState(index);
    }
  };

  return (
    <div>
      <div className="chip-list">
        {data.map((item, index) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              className={
                clickedState === index
                  ? "chip-list__item chip-list__item--clicked"
                  : "chip-list__item"
              }
              onClick={() => {
                handleItemClick(index);
              }}
              key={index}
            >
              {" "}
              {item}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

ChipList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  onItemClick: PropTypes.func,
};

ChipList.defaultProps = {
  data: [],
  onItemClick: (index) => index,
};

export default ChipList;
