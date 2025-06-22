import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeSearch, turnSearchDown } from "../features/cart/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.cart.search);
  const [name, setName] = useState("");
  // const [searchName, setSearchName] = useState(search);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(changeSearch({ search: name }));
  }

  return (
    <div className="navbar" style={{}}>
      <Link to={"/"} style={{}} className="router-link">
        <span onClick={dispatch(turnSearchDown())}>REDUX SHOPE</span>
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
