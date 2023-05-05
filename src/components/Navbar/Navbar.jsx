import { useState } from 'react';
import pactLogo from '../../assets/pact_logo.svg';
import searchIcon from '../../assets/icons/searchicon.svg';
import './Navbar.css';

function Navbar() {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <div className={navOpen ? 'navbar__open navbar' : 'navbar'}>
          <div className="navbar__brand">
            <img src={pactLogo} alt="pact logo" />
            <p>Pact</p>
          </div>
          <div className="navbar__menu">
            <button
              className="navbar__menubtn  close-btn"
              onClick={() => {
                setnavOpen(!navOpen);
              }}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <form className="navbar__input">
              <img
                src={searchIcon}
                alt="search icon"
                className="search__icon"
              />
              <input
                type="text"
                placeholder="search products, brands or freelancers"
              />
            </form>
            <div className="navbar__links">
              <a href="#">Personal</a>
              <a href="#">Sell on Pact</a>
              <a href="#">Townhall</a>
            </div>
            <div className="navbar__cta">
              <a href="#">Sign in</a>
              <a href="#">Sign up to shop</a>
            </div>
          </div>
          <button
            className="navbar__menubtn"
            onClick={() => {
              setnavOpen(!navOpen);
            }}
          >
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
