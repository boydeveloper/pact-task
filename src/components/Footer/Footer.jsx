import pactLogo from '../../assets/pact_logo.svg';
import linkedIn from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/Group.svg';
import twitter from '../../assets/icons/twitter.svg';
import './Footer.css';
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__grid--cols">
          <div className="footer__grid-col footer__grid-col--1">
            <div className="footer__brand">
              <img src={pactLogo} alt="" />

              <span>Pact</span>
            </div>
            <p className="footer__summary">
              Pact is an ecosystem of escrow-powered products that enables
              Africans to transact securely online. Pact is a product of
              Symfonia Technologies (RC 638363)
            </p>
          </div>

          <div className="footer__grid-col footer__grid-col--2">
            <div className="footer__heading">Pact Pay</div>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="#">Marketplace</a>
              </li>
              <li className="footer__link">
                <a href="#">Wallets</a>
              </li>
              <li className="footer__link">
                <a href="#">Escrows</a>
              </li>
              <li className="footer__link">
                <a href="#">Pockets</a>
              </li>
              <li className="footer__link">
                <a href="#">Stores</a>
              </li>
            </ul>
          </div>
          <div className="footer__grid-col footer__grid-col--3">
            <div className="footer__heading">Pact Pro</div>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="#">Commerce</a>
              </li>
              <li className="footer__link">
                <a href="#">Payments</a>
              </li>
              <li className="footer__link">
                <a href="#">Marketing</a>
              </li>
              <li className="footer__link">
                <a href="#">Office Tools</a>
              </li>
              <li className="footer__link">
                <a href="#">Point of sale</a>
              </li>
            </ul>
          </div>
          <div className="footer__grid-col footer__grid-col--4">
            <div className="footer__heading">Resources</div>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="#">Pricing</a>
              </li>
              <li className="footer__link">
                <a href="#">FAQs</a>
              </li>
              <li className="footer__link">
                <a href="#">Blog</a>
              </li>
              <li className="footer__link">
                <a href="#">Pact Research</a>
              </li>
              <li className="footer__link">
                <a href="#">Use cases</a>
              </li>
            </ul>
          </div>
          <div className="footer__grid-col footer__grid-col--5">
            <div className="footer__heading">Company</div>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="#">About us</a>
              </li>
              <li className="footer__link">
                <a href="#">Why Pact?</a>
              </li>
              <li className="footer__link">
                <a href="#">Careers</a>
              </li>
              <li className="footer__link">
                <a href="#">Our partners</a>
              </li>
              <li className="footer__link">
                <a href="#">Fun Space</a>
              </li>
            </ul>
          </div>

          <div className="footer__grid-col footer__grid-col--6">
            <div className="footer__socials">
              <a href="#" className="footer__socials--icon">
                <img src={linkedIn} alt="linkedin logo" />
              </a>
              <a href="#" className="footer__socials--icon">
                <img src={instagram} alt="instagram logo" />
              </a>
              <a href="#" className="footer__socials--icon">
                <img src={twitter} alt="twitter logo" />
              </a>
            </div>
            <a href="#" className="footer__email">
              hello@usepact.one
            </a>
            <p className="footer__address">Santos layout, Lagos, Nigeria</p>
          </div>

          <div className="footer__grid-col footer__grid-col--7">
            <div className="footer__heading">Seller Resources</div>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="#">Pact Business School</a>
              </li>
              <li className="footer__link">
                <a href="#">Seller Resource Central</a>
              </li>
              <li className="footer__link">
                <a href="#">Seller community</a>
              </li>
              <li className="footer__link">
                <a href="#">Merchant agreement</a>
              </li>
            </ul>
          </div>
          <div className="footer__grid-col footer__grid-col--8">
            <div className="footer__heading">Legal</div>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="#">Privacy policy</a>
              </li>
              <li className="footer__link">
                <a href="#">Terms of use (buyers)</a>
              </li>
              <li className="footer__link">
                <a href="#">Privacy policy</a>
              </li>
              <li className="footer__link">
                <a href="#">AML & KYC policy</a>
              </li>
              <li className="footer__link">
                <a href="#">Data and security</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__copyright-text">
          All rights reserved. &copy; Pact 2023
        </p>
      </div>
    </div>
  );
}

export default Footer;
