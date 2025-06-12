import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [name, setName] = useState("");
  const [searchName, setSearchName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setSearchName(name);
    console.log(name);
  }

  return (
    <div className="navbar" style={{}}>
      <Link to={"/"} style={{}} className="router-link">
        <span>REDUX SHOPE</span>
      </Link>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <img
          onClick={handleSubmit}
          src="https://img.icons8.com/?size=100&id=7695&format=png&color=131a85cc"
          alt=""
        />
      </form>
      <Link to={`cart`}>
        <img
          style={{ height: "40px", cursor: "pointer" }}
          src={
            "https://img.icons8.com/?size=100&id=85080&format=png&color=fcec05"
          }
          alt=""
        />
      </Link>
    </div>
  );
};

export default Navbar;
