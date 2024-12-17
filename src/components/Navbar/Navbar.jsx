import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/ME.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

    const navigate = useNavigate();
  
    const handleLoginClick = () => {
      navigate('/login'); // Navigate to the login page
    
    }

  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p>JUST BUY IT</p>
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
        </ul>
        <div className="nav-login-cart">
          <button onClick = {handleLoginClick}> Login</button>
          <img src={cart_icon} alt="Cart Icon" />
          <div className="nav-cart-count">10</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
