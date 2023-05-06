import './Hero.css';
import rightArrow from '../../../../assets/icons/pact__rightarrowicon.svg';
import heroImgOne from '../../../../assets/images/Rectangle 54 (3).png';
import heroImgTwo from '../../../../assets/images/Rectangle 54 (4).png';
import heroImgThree from '../../../../assets/images/Rectangle 54 (5).png';
import heroImgFour from '../../../../assets/images/Rectangle 54 (6).png';
function Hero() {
  return (
    <section>
      <div className="hero__wrapper">
        <div className="hero__wrapper--top">
          <div className="hero__pill">
            <span className="pill__tag">HOT</span>
            <span className="pill__text">
              Gain access to over 60,000+ customers. See how!
            </span>
            <img src={rightArrow} alt="right arrow" />
          </div>
          <div className="hero__textbox">
            <h1 className="hero__title">
              Get your brand in front of thousands of Africans.
            </h1>
            <p className="hero__summary">
              Sign up to start selling on Pact’s marketplace. Receive payments{' '}
              <br />
              securely, instantly and sell with all the tools you need!
            </p>
            <a href="#" className="hero__btn">
              Get Started
            </a>
          </div>
        </div>
        <div className="hero__wrapper--bottom">
          <img
            src={heroImgOne}
            alt="A waiter holding a coffee"
            className="hero__img"
          />
          <img src={heroImgTwo} alt="A girl smiling" className="hero__img" />
          <img
            src={heroImgThree}
            alt="Two men checking out some clothes in a store"
            className="hero__img"
          />
          <img
            src={heroImgFour}
            alt="A dark skinned lady smiling"
            className="hero__img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
