import './Hero.css';
import rightArrow from '../../../../assets/pact__rightarrowicon.svg';
import heroImgOne from '../../../../assets/hero__img-one.svg';
import heroImgTwo from '../../../../assets/hero__img-two.svg';
import heroImgThree from '../../../../assets/hero__img-three.svg';
import heroImgFour from '../../../../assets/hero__img-four.svg';
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
              Sign up to start selling on Pact’s marketplace. Receive payments
              <br />
              securely, instantly and sell with all the tools you need!
            </p>
            <a href="#" className="hero__btn">
              Get Started
            </a>
          </div>
        </div>
        <div className="hero__wrapper--bottom">
          <img src={heroImgOne} alt="A waiter holding a coffee" />
          <img src={heroImgTwo} alt="" />
          <img src={heroImgThree} alt="" />
          <img src={heroImgFour} alt="" />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Hero;
