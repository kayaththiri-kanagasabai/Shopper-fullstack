import React, { useContext, useRef, useState } from "react";
import './Navbar.css'
import cart_icon from "../../Components/Assets/cart_icon.png";
import dropdown from "../Assets/arrow.png"
import logo from "../../Components/Assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Contexts/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();
  
const dropdown_toggle=(e)=>{
  menuRef.current.classList.toggle('nav-menu-visible');
  e.target.classList.toggle('open');

}


  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>


      <img className="nav-dropdown" src={dropdown} alt="" onClick={dropdown_toggle} />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/shop">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("auth-token")?//if auth-token is present in local storage, show logout button
        <button onClick={
          ()=>{localStorage.removeItem('auth-token');//remove auth-token from local storage
            //if auth-token is not present in local storage, show login button
            window.location.replace('/')}}>Logout</button>:<Link to="/login">
            <button>Login</button>
          </Link>}

        
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems}</div>
      </div>
    </div>
  );
};

export default Navbar;
