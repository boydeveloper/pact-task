import './Businesses.css';
import cocacolaLogo from '../../../../assets/cocacola__logo.svg';
import pumaLogo from '../../../../assets/puma__logo.svg';
import dkLogo from '../../../../assets/dk__logo.svg';
import dk2Logo from '../../../../assets/dk2__logo.svg';
import nikeLogo from '../../../../assets/Nike__logo.svg';
function Businesses() {
  return (
    <section>
      <div className="container">
        <div className="businesses__wrapper">
          <h2>
            Tools to help you run your <br /> business independently online.
          </h2>
          .
          <div className="businesses__box">
            <div className="businesses__number">
              <span>300+</span>
              <span>Businesses</span>
            </div>
            <div className="businesses__logos">
              <img src={cocacolaLogo} alt="cocacola logo" />
              <img src={pumaLogo} alt="puma logo" />
              <img src={dkLogo} alt="" />
              <img src={dk2Logo} alt="" />
              <img src={nikeLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Businesses;
