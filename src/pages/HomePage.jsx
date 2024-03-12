import CustomerReviews from '../sections/CustomerReviews';
import Hero from '../sections/Hero';
import PopularProducts from '../sections/PopularProducts';
import Services from '../sections/Services';
import Subscribe from '../sections/Subscribe';
import SuperQuality from '../sections/SuperQuality';

function HomePage() {
  return (
    <>
      <section id="home" className="">
        <Hero />
      </section>
      <section id="popular" className=" padding ">
        <PopularProducts />
      </section>
      <section id="about-us" className="padding">
        <SuperQuality />
      </section>
      <section id="services" className="padding-x py-10">
        <Services />
      </section>
      <section className='bg-grey-0 padding'>
      <CustomerReviews />
      </section>
      <section className='padding'>
        <Subscribe />
      </section>
    </>
  );
}

export default HomePage;
