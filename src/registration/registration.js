import React, { useState } from 'react';
import './registration.css';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    city: '',
    dateOfBirth: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    permanentAddress: '',
    residentialAddress: '',
    phoneNumber: '',
    pinCode: '',
    state: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    // style={{background:"#C4D7B2", padding:"1rem", borderRadius:"10px"}}
    <div className='form-container'>
    <form onSubmit={handleSubmit} className="form-group">
        <center><h1>Register yourself</h1></center>
        {/* <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />  
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br /> */}
      {/* <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </label>
      <br /> */}
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      {/* <label>
        Permanent Address:
        <textarea
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Residential Address:
        <textarea
          name="residentialAddress"
          value={formData.residentialAddress}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Pin Code:
        <input
          type="text"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </label>
      <br /> */}
      <center><button type="submit">Request for account</button></center>
    </form>
    </div>
  );
};

export { RegistrationForm };
