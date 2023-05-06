import './Newsletter.css';
import NewsletterCover from '../../../../assets/images/image (3).png';
import zigZag from '../../../../assets/images/pact_zig.svg';
function Newsletter() {
  return (
    <section>
      <div className="newsletter">
        <div className="newsletter__imgbox">
          <img
            src={NewsletterCover}
            alt="A dark skinned lady smiling"
            className="newsletter__img"
          />
        </div>
        <div className="newsletter__msgbox">
          <div className="newsletter__msgbox--msg">
            <h1>
              Mojola - “Fashion is calm.Pact helps us bring calmness to our
              customers”
            </h1>
            <a href="#">Go behind the scenes with MadebyJo</a>
          </div>
          <div className="newsletter__zigzag">
            <img src={zigZag} alt="zig zag" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
