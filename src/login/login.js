import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { useDispatch } from "react-redux";

const LoginPage = ({ onLoginSuccess }) => {
  const handleSignUp = () => {
    navigate("/signup");
  };

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [userImage, setUserImage] = useState(null);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      // Create the request payload
      const payload = {
        username: username,
        password: password,
      };

      // Make a POST request to the login API endpoint
      const response = await axios.post("/user/authenticate", payload);

      //sending login confirmation to app.js

      // Extract the JWT token from the response
      const token = response.data;

      if (token) {
        onLoginSuccess();
      }

      // Fetch user data using the token
      const userResponse = await axios.get("/user/getUserByUsername", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = userResponse.data;

      // Dispatch an action to set the userData in the Redux store
      dispatch({ type: "SET_USER", payload: userData });

      const fileName = userData?.masteruser?.kycdetails?.cus_photo;

      // Make a GET request to retrieve the image
      if (fileName) {
        const userImageResponse = await axios.get(
          `/user/imageServe/${fileName}`,
          {
            responseType: "arraybuffer", // Tell axios to treat the response as binary data
          }
        );
      
        // Convert the received byte array (bytecode) to a URL
        const src2 = URL.createObjectURL(new Blob([userImageResponse.data]));
        localStorage.setItem("imageSrc", src2); // Remove this line's closing curly brace
        //dispatch({ type: "UPDATE_IMAGE_DETAILS", payload: src2 });
   
      
       
      }
      
     
      const userRole = userResponse.data.role;

      // Store the token and role in local storage for future use
      localStorage.setItem("data", userData);
      localStorage.setItem("token", token);
      localStorage.setItem("role", userRole);

      // Fetch Allusers based on Role
      let adminResponse;

      try {
        if (userRole === "ROLE_ADMIN") {
          adminResponse = await axios.get("/user/getAllUsers", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const allUsers = adminResponse.data;

          console.log(allUsers);
          localStorage.setItem("allUserData", JSON.stringify(allUsers));
        }
      } catch (error) {
        // Handle the error here
        console.error("Error fetching users:", error);
      }

      localStorage.setItem("data", JSON.stringify(userData));

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Get the user data from the response

      console.log(token);
      console.log(userData);
      console.log(userRole);

      navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error);
    }
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
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <p className="small">Don't have a account ,get one</p>
          <button onClick={handleSignUp}>Sign Up</button>
        </center>
      </form>
    </div>
  );
};

export default LoginPage;
