import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = ({ searchValue, setSearchValue }) => {
  return (
    <div className="searcher">
      <input
        className="searcher__input"
        type="text"
        placeholder="Buscar..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SearchIcon fontSize="large" className="btn" />
    </div>
  );
};

export default Searcher;
