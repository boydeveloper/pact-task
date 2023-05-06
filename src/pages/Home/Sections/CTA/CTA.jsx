import rings from '../../../../assets/images/pact__rings.svg';
import './CTA.css';
function CTA() {
  return (
    <section>
      <div className="cta">
        <img src={rings} alt="rings" />
        <p>Let’s get started</p>
        <div className="cta__description">
          <h6>
            Become a Pact Pro and <br /> earn extra when you sell.
          </h6>
          <a href="#">Get started</a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
