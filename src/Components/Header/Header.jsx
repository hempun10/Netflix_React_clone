import React from "react";
import logo from "../../assets/Logonetflix.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
const Header = () => {
  return (
    <nav className="header">
      <Link to={"/"}>
        {" "}
        <img src={logo} alt="Logo" />
      </Link>

      <div className="">
        <Link to="/shows">Tv Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/list">My List</Link>
      </div>
      <ImSearch />
    </nav>
  );
};

export default Header;
