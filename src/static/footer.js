import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Omega Banking. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
