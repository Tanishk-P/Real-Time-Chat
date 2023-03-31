import React from "react";
import { FiSearch } from "react-icons/fi";
import MaleUser, { FemaleUser } from "../UserDetails/UserAvatar";

function Search() {
  return (
    <div className="search">
      <form className="searchForm">
        <div className="searchBox">
          <span className="prefix">
            <FiSearch size={15} />
          </span>
          <input placeholder="Search" />
        </div>
      </form>
      <div className="userInfo">
        <div className="userProfile">
          <FemaleUser />
          <span>Chari</span>
        </div>
        <div className="userProfile">
          <MaleUser />
          <span>Tanishk</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
