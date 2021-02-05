import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="full-logo">
          <img src="./images/Book.png" alt="" width="50px" height="50px" />
          <div className="logo">
            Bookstore
          </div>
        </div>
        <ul className="nav-links">
            <Link to='/'>
              <li>Home</li>
            </Link>
          <div className="label-logo">
            <img src="./images/cart.png" alt="" width="30px" height="30px" />
              <Link to='/cart'>
                <li>Cart</li>
              </Link>
          </div>
          <Link to='/signin'>
            <li>Sign In</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar