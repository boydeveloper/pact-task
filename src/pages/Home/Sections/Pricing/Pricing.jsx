import './Pricing.css';
import pricingImgOne from '../../../../assets/images/image 28.png';
import pricingImgTwo from '../../../../assets/images/image 29.png';
import pricingImgThree from '../../../../assets/images/image 30.png';

function Pricing() {
  return (
    <section>
      <div className="pricing">
        <div className="pricing__header">
          <h1>Pricing that works for your small business.</h1>
          <div className="pricing__header--description">
            <p>
              <strong>GET STARTED FOR FREE ( ₦‎0/month).</strong>
              Upgrade your business as you grow and get access to more tools to
              help you scale, No hidden fees or long-term contracts.
            </p>
            <a href="#">Compare pricing</a>
          </div>
        </div>
        <div className="pricing__items">
          <div className="pricing__item">
            <img src={pricingImgOne} alt="A lady staring" />
            <h5>Zobo - ₦‎900/month</h5>
            <a href="#">View plan details</a>
          </div>
          <div className="pricing__item">
            <img src={pricingImgTwo} alt="A lady looking into a monitor" />
            <h5>Palmwine - ₦‎1800/month</h5>
            <a href="#">View plan details</a>
          </div>
          <div className="pricing__item">
            <img src={pricingImgThree} alt="A chef smiling" />
            <h5>Bourbon - ₦270‎0/month</h5>
            <a href="#">View plan details</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
