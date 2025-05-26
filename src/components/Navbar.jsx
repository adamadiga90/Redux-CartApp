import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: " 0 40px",
        color: "#83a85d",
        backgroundColor: "#DDEB9D",
      }}
    >
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
          cursor: "pointer",
          backgroundColor: "#83a85d",
          color: "#DDEB9D",
          padding: "3px 10px",
          borderRadius: "5px",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
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
