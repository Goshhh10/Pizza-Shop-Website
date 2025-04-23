import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="About us pizza making" />
      </div>
      <div className="about-text">
        <span>About Us</span>
        <h2>We make good and <br /> tasty pizzas</h2>
        <p>
          For over 15 years, Pizza Pie has been crafting authentic Italian pizzas with the freshest ingredients 
          and traditional recipes. Our chefs are passionate about bringing the taste of Italy to your table 
          with handcrafted perfection in every slice.
        </p>
        <a href="#" className="btn">Learn More</a>
      </div>
    </section>
  );
};

export default About;