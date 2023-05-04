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
  Pactpro,
  Pricing,
  Newsletter,
  CTA,
  Resources,
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
        <Pactpro />
        <Pricing />
        <Newsletter />
        <CTA />
        <Resources />
      </div>
    </>
  );
}

export default Home;
