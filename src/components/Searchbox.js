import React from "react";

function SearchBox(props) {
  return (
    <>
      <input
        type="search"
        className="form-control rounded w-100"
        value={props.value}
        onChange={(event) => {
          props.setSearchValue(event.target.value);
          props.setPage(1);
        }}
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0 bg-transparent" id="search-addon">
        <i className="fa fa-search text-light"></i>
      </span>
    </>
  );
}

export default SearchBox;
