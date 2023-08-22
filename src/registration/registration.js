import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './registration.css';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const handleSignIn = () => {
        navigate('/signin');
       };

  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    role: '',
    date_of_birth: '',
    phone_no: '',
    permanent_add: '',
    residential_add: '',
    sameAsPermanent: false,
  });

  //const [successMessage, setSuccessMessage] = useState('');

  // Step 1: Wrap the 'validateForm' function in useCallback
  const validateForm = useCallback(() => {
    const {
      first_name,
      last_name,
      email,
      password,
      role,
      date_of_birth,
      phone_no,
      permanent_add,
      sameAsPermanent,
      residential_add,
    } = formData;

    const isValid =
      first_name !== '' &&
      last_name !== '' &&
      email !== '' &&
      password !== '' &&
      role !== '' &&
      date_of_birth !== '' &&
      phone_no !== '' &&
      permanent_add !== '' &&
      (!sameAsPermanent || (sameAsPermanent && residential_add !== ''));

    setIsFormValid(isValid);
  }, [formData]); // Include 'formData' in the dependency array

  useEffect(() => {
    validateForm();
  }, [formData, validateForm]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    if (name === 'sameAsPermanent') {
      setFormData({
        ...formData,
        sameAsPermanent: newValue,
        residential_add: newValue ? formData.permanent_add : '',
      });
    } else {
      setFormData({ ...formData, [name]: newValue });
    }

    validateForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || !isFormValid) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await axios.post(
        'http://localhost:5050/user/userRegistration',
        formData
      );

      setFormData({
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        role: '',
        date_of_birth: '',
        phone_no: '',
        permanent_add: '',
        residential_add: '',
        sameAsPermanent: false,
      });
      window.alert("HEY! "+response.data.first_name+" "+response.data.last_name+" welcome to Omega Family");

      // Redirect the user to the login page
      navigate('/signin');
      //setSuccessMessage(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='form-group'>
        <center>
          <h1>Register yourself</h1>
        </center>
        <label>
          First Name:
          <input
            type='text'
            name='first_name'
            value={formData.first_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type='text'
            name='last_name'
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Role:
          <select
            className='form-select'
            name='role'
            value={formData.role}
            onChange={handleChange}
          >
            <option value=''>Select Role</option>
            <option value='ROLE_USER'>User</option>
            <option value='ROLE_ADMIN'>Admin</option>
          </select>
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type='date'
            name='date_of_birth'
            value={formData.date_of_birth}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type='tel'
            name='phone_no'
            value={formData.phone_no}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Permanent Address:
          <input
            type='text'
            name='permanent_add'
            value={formData.permanent_add}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Same as Permanent Address:
          <input
            type='checkbox'
            name='sameAsPermanent'
            checked={formData.sameAsPermanent}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Residential Address:
          <input
            type='text'
            name='residential_add'
            value={formData.residential_add}
            onChange={handleChange}
            disabled={formData.sameAsPermanent}
          />
        </label>
        <br />
        <center>
          <button type='submit' disabled={!isFormValid || isSubmitting}>
            Request for account
          </button>
          <button onClick={handleSignIn}>Sign In</button>
        </center>
      </form>
      {/* {successMessage && (
        <div className='success-message'>
          <p>{successMessage}</p>
        </div>
      )} */}
    </div>
  );
};

export default RegistrationForm;
