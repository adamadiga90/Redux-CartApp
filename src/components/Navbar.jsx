import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar" style={{}}>
      <Link to={"/"} style={{}} className="router-link">
        <span>REDUX SHOPE</span>
      </Link>
      <Link to={`cart`}>
        <img
          style={{ height: "40px", cursor: "pointer" }}
          src={
            "https://img.icons8.com/?size=100&id=85080&format=png&color=83a85d"
          }
          alt=""
        />
      </Link>
    </div>
  );
};

export default Navbar;
