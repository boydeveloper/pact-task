import customerImg from '../../../../assets/images/pact__img-ft2.png';
function Customer() {
  return (
    <section>
      <div className="customer__wrapper utility--flex">
        <div className="products__wrapper--left ">
          <img src={customerImg} alt="A lady smiling at a book" />
        </div>
        <div className="products__wrapper--right util__textbox">
          <h1 className="utility__heading">
            Build better customer relationships.
          </h1>
          <p className="utility__summary">
            Keep customers coming back to your business with personal touches
            and rewards. Manage your offline and online customers in one place,
            create discount codes, email campaigns, chat with them and so much
            more.
          </p>
          <a href="#">See our commerce solutions.</a>
        </div>
      </div>
    </section>
  );
}

export default Customer;
