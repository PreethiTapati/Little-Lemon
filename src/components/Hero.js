import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section id="hero" className="container mb-3">
      <div className="info white pd pdr-65p">
        <h1 className="lemon-primary-lemon">Little Lemon</h1>
        <h2>Chicago</h2>
        <p> Nestled in the heart of bustling Chicago, Little Lemon is where
            modern flair meets cozy nostalgia. Our diverse, artisanal menu,
            featuring delectable bruschetta, succulent burgers, and refreshing
            Greek salads, is a testament to our belief that food is an art.</p>
        <Link className="txt-dec-none" to="reserve">
          <button className="reserve-btn">Book a table</button>
        </Link>
         
      </div>
    </section>
  );
};

export default Hero;
