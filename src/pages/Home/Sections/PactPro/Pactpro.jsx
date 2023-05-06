import './Pactpro.css';
import pactproImg from '../../../../assets/images/Image Wrapper.svg';
import gavel from '../../../../assets/icons/pact__gavel.svg';
import card from '../../../../assets/icons/card.svg';
import gift from '../../../../assets/icons/pact__gift.svg';
import cart from '../../../../assets/icons/cart.svg';
function Pactpro() {
  return (
    <section>
      <div className="pactpro">
        <h1 className="secondary__heading">
          Pact Pro helps your small <br /> business do more.
        </h1>

        <div className="pactpro__wrapper">
          <div className="pactpro__wrapper--left">
            <img src={pactproImg} alt="" />
          </div>
          <div className="pactpro__wrapper--right">
            <div className="pactpro__features">
              <div className="pactpro__feature">
                <img src={card} alt="card icon" />
                <div className="pactpro__feature--desc">
                  <span>Forward-financing to help your business grow.</span>
                  <p>
                    We provide you with the capital you need to restock your
                    inventory and fulfil orders from your store on the
                    marketplace.
                  </p>
                </div>
              </div>
              <div className="pactpro__feature">
                <img src={cart} alt="cart icon" />
                <div className="pactpro__feature--desc">
                  <span>Buy directly from brands and other businesses.</span>
                  <p>
                    Discover local and foreign brands and makers. Buy in large
                    quantity at reasonable prices and have the items delivered
                    to you!
                  </p>
                </div>
              </div>
              <div className="pactpro__feature">
                <img src={gavel} alt="" />
                <div className="pactpro__feature--desc">
                  <span>Swift an instant dispute resolution system.</span>
                  <p>
                    Have an issue with a customer about one of your products?
                    Open a dispute and we will step in right away to help
                    resolve it!
                  </p>
                </div>
              </div>
              <div className="pactpro__feature">
                <img src={gift} alt="gift icon" />
                <div className="pactpro__feature--desc">
                  <span>Earn extra money when you sell on Pact stores.</span>
                  <p>
                    For every completed order, you earn 0.5% on each
                    transaction. We release the payment as soon as your order is
                    completed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pactpro;
