import rightArrow from '../../../../assets/icons/arrow.svg';
import rightBentArrow from '../../../../assets/icons/arrow (1).svg';
import './Resources.css';
function Resources() {
  return (
    <div className="resources">
      <h1>Resources</h1>

      <div className="resources__accordion">
        <div className="resources__accordion--resource">
          <span className="resources__accordion--resource-num">01</span>
          <h1>Check out Pact Business School</h1>
          <img src={rightArrow}  />
        </div>
        <div className="resources__accordion--resource">
          <span className="resources__accordion--resource-num">02</span>
          <h1>Get access to support you need</h1>
          <img src={rightBentArrow} alt="right bent arrow icon" />
        </div>
        <div className="resources__accordion--resource">
          <span className="resources__accordion--resource-num">03</span>
          <h1>Browse our business software and solutions</h1>
          <img src={rightArrow} alt="right arrow icon" />
        </div>
        <div className="resources__accordion--resource">
          <span className="resources__accordion--resource-num">04</span>
          <h1>What pricing plan is good for me?</h1>
          <img src={rightArrow} alt="right arrow icon" />
        </div>
      </div>
    </div>
  );
}

export default Resources;
