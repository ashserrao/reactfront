import React from 'react';
import "./ServicesPage.css";


const ServicesPage = () => {
  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <div className="service-section">
        <h3>Bank Card Services</h3>
        <div className="card-services">
          <div className="card">
            <img src="https://www.finance-monthly.com/Finance-Monthly/wp-content/uploads/2020/04/iStock-531236924.jpg" alt="Credit Card" />
            <h4>Credit Card</h4>
            <p>Flexible credit options with rewards and benefits.</p>
          </div>
          <div className="card">
            <img src="https://www.hlb.com.my/content/dam/hlb/my/images/Personal/Credit_Cards/digital-services/credit-limit-online.jpg" alt="Debit Card" />
            <h4>Debit Card</h4>
            <p>Access your funds easily with our secure debit cards.</p>
          </div>
          {/* Add more card services as needed */}
        </div>
      </div>
      <div className="service-section">
        <h3>Mobile Banking Services</h3>
        <div className="mobile-services">
          <div className="card">
            <img src="https://www.paisabazaar.com/wp-content/uploads/2018/11/Mobile-Banking.jpg" alt="Mobile App" />
            <h4>Mobile App</h4>
            <p>Bank on the go with our user-friendly mobile app.</p>
          </div>
          {/* Add more mobile banking services as needed */}
        </div>
      </div>
      <div className="service-section">
        <h3>Loan Services</h3>
        <div className="loan-services">
          <div className="card">
            <img src="https://goldstreetbusiness.com/wp-content/uploads/2020/06/LOAN.jpg" alt="Personal Loan" />
            <h4>Personal Loan</h4>
            <p>Get the financial support you need with our personal loans.</p>
          </div>
          {/* Add more loan services as needed */}
        </div>
      </div>
      <div className="service-section">
        <h3>Online Banking Solutions</h3>
        <div className="online-banking">
          <div className="card">
            <img src="https://connectioncafe.com/wp-content/uploads/2019/10/corebanking-brief-1.png" alt="Online Banking" />
            <h4>Online Banking</h4>
            <p>Manage your accounts online with our secure platform.</p>
          </div>
          {/* Add more online banking solutions as needed */}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
