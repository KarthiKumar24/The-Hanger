import React from "react";
import "./Header.css";
import "../assets/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = ({ cart }) => {
  return (
    <>
      <div className="navBar sticky-top ">
        <div className="logo">Hanger Site</div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Cart"} id="check">
              <span className="cart-count">{cart.length}</span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
