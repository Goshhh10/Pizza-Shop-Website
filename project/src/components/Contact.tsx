import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="connect">
        <div className="connect-text">
          <span>Let's Talk</span>
          <h2>Connect now</h2>
        </div>
        <a href="#contact-form" className="btn">Contact Us</a>
      </div>
      
      <div className="contact-container">
        <div className="contact-box">
          <h3>Pizza Pie</h3>
          <span>Connect With Us</span>
          <div className="social">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </div>
        </div>
        
        <div className="contact-box">
          <h3>Menu Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="contact-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#disclaimer">Disclaimer</a></li>
            <li><a href="#terms">Terms Of Use</a></li>
          </ul>
        </div>
        
        <div className="contact-box address">
          <h3>Contact</h3>
          <div className="contact-info">
            <div className="info-item">
              <MapPin size={18} />
              <span>123 Pizza Street, Foodville, New York, USA</span>
            </div>
            <div className="info-item">
              <Phone size={18} />
              <span>+1 234 567 8900</span>
            </div>
            <div className="info-item">
              <Mail size={18} />
              <span>contact@pizzapie.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;