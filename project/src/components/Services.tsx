import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
  return (
    <section className="services" id="services">
      <div className="heading">
        <span>Services</span>
        <h2>We provide best food services</h2>
      </div>

      <div className="services-container">
        <div className="s-box">
          <div className="s-icon">
            <img src="https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Order online" />
          </div>
          <h3>Easy Ordering</h3>
          <p>Simply select your favorite pizzas and place your order online for quick and convenient service.</p>
        </div>
        
        <div className="s-box">
          <div className="s-icon">
            <img src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fast delivery" />
          </div>
          <h3>Fast Delivery</h3>
          <p>We guarantee delivery within 30 minutes or less to ensure your pizza arrives hot and fresh.</p>
        </div>
        
        <div className="s-box">
          <div className="s-icon">
            <img src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Quality guarantee" />
          </div>
          <h3>Quality Guaranteed</h3>
          <p>We use only the freshest ingredients to ensure every pizza we deliver exceeds your expectations.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;