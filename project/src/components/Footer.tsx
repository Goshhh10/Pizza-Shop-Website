import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="copyright">
        <p>&copy; {currentYear} Pizza Pie. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;