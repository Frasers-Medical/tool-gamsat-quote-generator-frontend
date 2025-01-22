import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PillList.scss";

const PillList = ({ data, onItemClick }) => {
  const [clickedState, setClickedState] = useState(-1);

  return (
    <div>
      <div className="pill-list">
        {data.map((item, index) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              className={
                clickedState === index
                  ? "pill-list__item pill-list__item--clicked"
                  : "pill-list__item"
              }
              onClick={() => {
                onItemClick(index);
                setClickedState(index);
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

PillList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  onItemClick: PropTypes.func,
};

PillList.defaultProps = {
  data: [],
  onItemClick: (index) => index,
};

export default PillList;
