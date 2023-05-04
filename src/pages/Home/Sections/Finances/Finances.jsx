import './Finances.css';
import FinancesImg from '../../../../assets/images/pact__img-ft4.png';
function Finances() {
  return (
    <section>
      <div className="finances__wrapper utility--flex">
        <div className="finances__wrapper--left util__textbox">
          <h1 className="utility__heading">Manage your business finances.</h1>
          <p className="utility__summary">
            Get paid directly and instantly to a bank account created specially
            for your business. Budget your income, earn extra on every item
            sold, pay your staff and suppliers and get forward financing to
            purchase products.
          </p>
          <a href="#">See our payment solutions.</a>
        </div>
        <div className="finances__wrapper--right">
          <img src={FinancesImg} alt="A boy checking out a CD disk" />
        </div>
      </div>
    </section>
  );
}

export default Finances;
