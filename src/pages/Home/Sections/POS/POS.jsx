import './POS.css';
import posImg from '../../../../assets/images/Rectangle 54.png';
function POS() {
  return (
    <section>
      <div className="POS__wrapper utility--flex utility--flex__col-reverse">
        <div className="POS__wrapper--left ">
          <img src={posImg} alt="A lady smiling at a book" />
        </div>
        <div className="POS__wrapper--right util__textbox">
          <h1 className="utility__heading">
            Point of Sale tools right on your phone.
          </h1>
          <p className="utility__summary">
            With our POS tools you can record offline sales and payments and
            even manage customer appoints and so much more. Launch a drive-thru,
            pick-up and eat-up service, which makes it easy for your customer to
            pre-order on the go!
          </p>
          <a href="#">See our commerce solutions.</a>
        </div>
      </div>
    </section>
  );
}

export default POS;
