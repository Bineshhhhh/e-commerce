import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/ME.png';
import cart_icon from '../assets/cart_icon.png';
import profile_icon from '../assets/cart_cross_icon.png';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const navigate = useNavigate();
  const{getTotalCartItems} = useContext(ShopContext);
  
  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p>Better Buy</p>
        </div>
        <ul className="nav-menu">
          <li onClick={() => setMenu("shop")} className={menu === "shop" ? "active" : ""}>
            Shop {menu === "shop" && <hr />}
          </li>
          <li className={menu === "mens" ? "active" : ""} onClick={() => setMenu("men")}>
            <Link to="/men" className="nav-link">Men</Link>
            {menu === "men" && <hr />}
          </li>
          <li className={menu === "womens" ? "active" : ""} onClick={() => setMenu("women")}>
            <Link to="/women" className="nav-link">Women</Link>
            {menu === "women" && <hr />}
          </li>
          <li className={menu === "kids" ? "active" : ""} onClick={() => setMenu("kid")}>
            <Link to="/kid" className="nav-link">Kid</Link>
            {menu === "kid" && <hr />}
          </li>
          <li>
            <Link to="/profile">
              <img src={profile_icon} alt='Profile Icon' className='profile_icon' />
            </Link>
          </li>
        </ul>
        <div className="nav-login-cart">
          <button onClick={handleLoginClick}> Login</button>
          <Link to="/cart"> 
            <img src={cart_icon} alt="Cart Icon" className="cart-icon" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
