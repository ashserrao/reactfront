import React, { useState } from 'react';
import Dropdown from '../home/dropdown';
import axios from 'axios';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log(username, password);
    //   // Create the request payload
    //   const payload = {
    //     username: username,
    //     password: password,
    //   };
    //   // Make a POST request to the login API endpoint
    //   axios
    //     .post('https://reqres.in/api/users?page=2', payload)
    //     .then((response) => {
    //       // Handle the response
    //       console.log('Login successful:', response.data);
    //       // Perform any necessary actions, such as storing the authentication token in local storage or Redux state
    //     })
    //     .catch((error) => {
    //       // Handle the error
    //       console.error('Login failed:', error);
    //       // Perform any necessary error handling, such as displaying an error message to the user
    //     });
  };

  return (
    <div className="form-container">
      <form className="form-group">
        <center>
          <h1>Login</h1>
        </center>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <center>
          <button style={{ marginTop:"20px"}}type="button" onClick={handleLogin}>
            Login
          </button>
        </center>
      </form>
    </div>
  );
};

export { LoginPage };
