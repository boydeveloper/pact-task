import './Solution.css';
import solutionImgOne from '../../../../assets/images/Image.png';
import solutionImgTwo from '../../../../assets/images/Image (1).png';
import solutionImgThree from '../../../../assets/images/Image (2).png';
function Solution() {
  return (
    <section>
      <div className="solution__wrapper">
        <h1>
          A solution for different
          <br />
          types of businesses.
        </h1>
        <div className="solution__wrapper--grid-items">
          <div className="solution__grid-item">
            <img src={solutionImgOne} alt=" A lady smiling" />

            <h4>Fashion & Beauty Businesses</h4>
            <p>
              Sell fashion items and earn daily, help your customers find items
              that fit their style and more.
            </p>
            <a href="#">View our case study</a>
          </div>

          <div className="solution__grid-item">
            <img src={solutionImgTwo} alt=" A lady smiling" />

            <h4>Food & Restaurants</h4>
            <p>
              List different meals for sale, allow customers customize orders,
              create accounts for different branches.
            </p>
            <a href="#">View our case study</a>
          </div>
          <div className="solution__grid-item">
            <img src={solutionImgThree} alt=" A lady smiling" />

            <h4>Retailers & Supermarkets</h4>
            <p>
              Run discount and sales programs. The retail POS system for smooth
              selling online and offline.
            </p>
            <a href="#">View our case study</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
