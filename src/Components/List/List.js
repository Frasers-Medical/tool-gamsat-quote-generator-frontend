import React from "react";
import PropTypes from "prop-types";
import "./List.scss";

const List = ({ data, onItemClick }) => {
  const [clickedState, setClickedState] = React.useState(-1);

  return (
    <div>
      <div className="list">
        {data.map((item, index) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              className={
                clickedState === index
                  ? "list__item list__item--clicked"
                  : "list__item"
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

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  onItemClick: PropTypes.func,
};

List.defaultProps = {
  data: [],
  onItemClick: (index) => index,
};

export default List;
