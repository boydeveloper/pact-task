import './Products.css';
import productImg from '../../../../assets/images/productimg.png';
function Products() {
  return (
    <section>
      <div className="products__wrapper utility--flex">
        <div className="products__wrapper--left util__textbox">
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
        <div className="products__wrapper--right">
          <img src={productImg} alt="A boy checking out a CD disk" />
        </div>
      </div>
    </section>
  );
}

export default Products;
