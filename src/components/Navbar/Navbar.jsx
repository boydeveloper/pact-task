import pactLogo from '../../assets/pact_logo.svg';
import './Navbar.css';
function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="navbar__brand">
            <img src={pactLogo} alt="pact logo" />
            <p>Pact</p>
          </div>
          <form className="navbar__input">
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
      </div>
    </header>
  );
}

export default Navbar;
