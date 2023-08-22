import React from 'react';
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <div className="contact-info">
          <h3>Head Office Address</h3>
          <p>
            Omega Bank<br />
            123 Main Street<br />
            Bangalore, India<br />
            Zip Code: 560001
            Phone No. : 2222211111
          </p>
        </div>
        <div className="bank-image">
          <img src="https://alloy-website.files.svdcdn.com/production/banks-header.svg" alt="Omega Bank" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
