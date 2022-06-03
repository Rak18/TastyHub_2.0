import "./Navbar.css";
import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
    <div className="navbar__logo">
    <Link to="/">  <h2>Tasty Hub</h2> </Link>
     
    </div>

    <ul className="navbar__links">
      <li>
        <Link to="/cart" className="cart__link">
          <i className="fas fa-shopping-cart"></i>
          <span>
            Cart <span className="cartlogo__badge"> {getCartCount()}</span>
          </span>
        </Link>
      </li>
      <li>
      <button> Login </button>
      {/* <Link to='/login'>Login</Link> */}
      </li>
    </ul>

    <div className="hamburger__menu" onClick={click}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
  );
};
