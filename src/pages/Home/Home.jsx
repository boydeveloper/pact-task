import POS from './Sections/POS/POS';
import {
  Hero,
  Businesses,
  Products,
  Customer,
  Finances,
  Team,
  Solution,
  Manufacturers,
} from './Sections/index';

function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <Businesses />
        <Products />
        <Customer />
        <Finances />
        <POS />
        <Team />
        <Solution />
        <Manufacturers />
      </div>
    </>
  );
}

export default Home;
