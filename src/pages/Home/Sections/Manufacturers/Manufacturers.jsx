import './Manufacturers.css';
import manufacturersImg from '../../../../assets/images/Rectangle 54 (2).png';
function Manufacturers() {
  return (
    <section>
      <div className="manufacturers__wrapper ">
        <div className="manufacturers__wrapper--left">
          <img src={manufacturersImg} alt="man and lady checking out" />
        </div>
        <div className="manufacturers__wrapper--right">
          <h1>Want to buy directly from manufacturers cheaper?</h1>
          <p>
            We connect you to over 8,000+ local and international brands and
            help you buy from them securely and at a discounted rate. We handle
            the shipping and remittance on your behalf! Even better you can
            actually make purchases from these businesses even if you have zero
            capital. Yes, using our invoice financing option!
          </p>
          <a href="#">Check out Townhall</a>
        </div>
      </div>
    </section>
  );
}

export default Manufacturers;
