import React from "react";
import "./About.css";
import AboutPic1 from "../images/logos/chefs-mario-and-adrian-a.jpg";
import AboutPic2 from "../images/logos/chefs-mario-and-adrian-b.jpg";



const About = () => {
  return (
   <section className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12 align-self-start pd">
          <h2 className="lemon-primary-lemon">Little Lemon</h2>
          <h3 className="lemon-primary-dark">Chicago</h3>
        <p>
            Welcome to Little Lemon, a cherished Mediterranean eatery in the heart of Chicago. Our diverse menu blends tradition and innovation, offering delectable bruschettas, succulent burgers, and refreshing Greek salads.
            <br></br> <br></br>
            As a family-owned restaurant, we prioritize locally-sourced ingredients to create dishes that not only delight the palate but also nourish the soul.

Owned by Italian brothers, Mario and Adrian, who ventured to the United States to realize their shared dream of owning a restaurant. Drawing inspiration from family recipes and Mario's culinary expertise gained in Italy, our menu reflects a fusion of classic Italian dishes and diverse Mediterranean flavors.
            <br></br> <br></br>Our restaurant exudes a rustic and relaxed ambiance, offering a welcoming retreat with moderate prices, making it a favored spot for meals at any time of the day.
            Whether you're yearning for a romantic dinner, a family gathering, or a laid-back outing with friends, Little Lemon stands as your ultimate culinary destination. Discover us in the heart of Chicago, promising an unforgettable dining experience.
            </p>
        </div>
<div className="col-md-6 col-sm-12 text-center align-self-center">
          <div className="my-3">
            <img className="about-pic img-fluid" src={AboutPic1} alt="About us 1" />
          </div>
          <div className="my-3">
            <img className="about-pic img-fluid" src={AboutPic2} alt="About us 2" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
