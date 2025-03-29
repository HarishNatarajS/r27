import React, { useState } from 'react';
import '../App.css'
function Header({ currentTab }) {
  // State for count of wishlist and cart items
  const [wishlistCount, setWishlistCount] = useState(3);
  const [cartCount, setCartCount] = useState(3);

  // Function to add active class dynamically
  const getActiveClass = (tabName) => {
    return currentTab === tabName ? 'nav__link active-link' : 'nav__link';
  };

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__container container">
          <div className="header__contact">
            <span>(+91) 96009 14761</span>
            <span> Our Location</span>
          </div>

          <p className="header__alert-news">
            Super Deals - Save more with Coupons
          </p>

          <div>
          <a href="login" className="header__top-action">
            Login IN
          </a>
          <a className="header__top-action">
            &nbsp;/&nbsp;
          </a>
          <a href="signup" className="header__top-action">
            Sign UP
          </a>
          </div>
        </div>
      </div>

      <nav className="nav container">
        <a href="index" className="nav__logo">
          <img src="/img/logo1.png" alt="" className="nav__logo-img" />
        </a>

        <div className="nav__menu" id="nav-menu">
          <div className="nav__menu-top">
            <a href='index' className="nav__menu-logo">
              
            </a>
          </div> 
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className={getActiveClass('home')}>Home</a>
            </li>
            <li className="nav__item">
              <a href="/shop" className={getActiveClass('shop')}>Shop</a>
            </li>
            <li className="nav__item">
              <a href="/account" className={getActiveClass('account')}>My account</a>
            </li>
            <li className="nav__item">
              <a href="/compare" className={getActiveClass('compare')}>Compare</a>
            </li>
            <li className="nav__item">
              <a href="/login" className={getActiveClass('login')}>Login</a>
            </li>
          </ul>

          <form className="search_in_home">
            <input type="text" placeholder="search" className="searchinput" />
            <button type="button" className="search_button">
              <img src="img/search.png" alt="" />
            </button>
          </form>
        </div>

        <div className="header__user-action">
          <a href="/wishlist" className="header__action-btn">
            <img src="img/icon-heart.svg" alt="" />
            <span className="count">{wishlistCount}</span>
          </a>
          <a href="/cart" className="header__action-btn">
            <img src="img/icon-cart.svg" alt="" />
            <span className="count">{cartCount}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
