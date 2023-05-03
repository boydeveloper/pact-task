import './Finances.css';
import FinancesImg from '../../../../assets/images/pact__img-ft4.png';
function Finances() {
  return (
    <section>
      <div className="finances__wrapper utility--flex">
        <div className="finances__wrapper--left util__textbox">
          <h1 className="utility__heading">
            List your products on our marketplace.
          </h1>
          <p className="utility__summary">
            Get discovered by thousands of Africans. Sign up and start listing
            your items for free on our marketplace. We help you receive payments
            securely through escrow and help you deliver straight to your
            customers.
          </p>
          <a href="#">See our commerce solutions.</a>
        </div>
        <div className="finances__wrapper--right">
          <img src={FinancesImg} alt="A boy checking out a CD disk" />
        </div>
      </div>
    </section>
  );
}

export default Finances;
