import './Businesses.css';
import cocacolaLogo from '../../../../assets/Logos/cocacola__logo.svg';
import pumaLogo from '../../../../assets/Logos/puma__logo.svg';
import dkLogo from '../../../../assets/Logos/dk__logo.svg';
import dk2Logo from '../../../../assets/Logos/dk2__logo.svg';
import nikeLogo from '../../../../assets/Logos/Nike__logo.svg';
function Businesses() {
  return (
    <section>
      <div className="businesses__wrapper">
        <h2 className="secondary__heading">
          Tools to help you run your <br /> business independently online.
        </h2>
        <div className="businesses__box">
          <div className="businesses__number">
            <span>300+</span>
            <span>Businesses</span>
          </div>
          <div className="businesses__logos">
            <img
              src={cocacolaLogo}
              alt="cocacola logo"
              className="business__logo"
            />
            <img src={pumaLogo} alt="puma logo" className="business__logo" />
            <img src={dkLogo} alt="logo" className="business__logo " />
            <img src={dk2Logo} alt="logo" className="business__logo " />
            <img src={nikeLogo} alt="nike logo" className="business__logo " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Businesses;
