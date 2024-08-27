import React, { useState } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  console.log("header render");

  //subscribe to the store using selector-------------------------------------
  // const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    console.log("use effect");
  }, [btnName]);

  return (
    <div className="flex justify-between px-[15%] h-20 shadow-md ">
      <div className="logo-container">
        <img
          className="h-20 place-items-center cursor-pointer"
          src={LOGO_URL}
        />
      </div>
      <div className="lg:flex justify-between hidden">
        <ul className="flex place-items-center gap-16 font-medium cursor-pointer text-lg ">
          <li className="hover:text-orange-600">
            <Link to="/home"> Home</Link>
          </li>
          <li className="hover:text-orange-600">
            <Link to="/about"> About</Link>
          </li>
          <li className="hover:text-orange-600">
            <Link to="/contact"> Contact</Link>
          </li>
          <li className="hover:text-orange-600"> 🛒 (0 items)</li>{" "}
          {/* {cartItems.length}*/}
          {/*login or logout button--------*/}
          <li
            className="text-lg font-medium border border-none py-1 px-6 bg-orange-50 text-orange-600 rounded-md hover:text-orange-400"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
              // console.log(btnName);
            }}
          >
            {btnName}
          </li>
        </ul>
      </div>
      <div className=" flex text-4xl lg:hidden  place-items-center hover:text-orange-600">
        <a href="#">&#8801;</a>
      </div>
    </div>
  );
};

export default Header;
