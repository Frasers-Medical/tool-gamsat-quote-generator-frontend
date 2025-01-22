import React from "react";
import PropTypes from "prop-types";
import "./SearchBar.scss";
import Fuse from "fuse.js";

const SearchBar = ({ data, onInputChange }) => {
  const fuse = new Fuse(data);

  const onSearch = ({ currentTarget }) => {
    const query = currentTarget.value;
    const results = fuse.search(query);
    const filteredData = query ? results.map((item) => item.item) : data;
    onInputChange(filteredData);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="search"
        onChange={onSearch}
      />
    </div>
  );
};

SearchBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  onInputChange: PropTypes.func,
};

SearchBar.defaultProps = {
  data: [],
  onInputChange: (index) => index,
};

export default SearchBar;
