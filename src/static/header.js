import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../userActions";
import { useNavigate } from "react-router-dom";

import "./header.css";
import axios from "axios";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const imageSrc = localStorage.getItem("imageSrc");
  //const imageSrc = useSelector(state => state.user?.masteruser?.kycdetails?.imageSrc);

  //const [imageSrc1, setImageSrc1] = useState(imageSrc);
  const userData1 = useSelector((state) => state.user);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    // Dispatch the logoutUser action to clear user state
    dispatch(logoutUser());

    // Clear local storage or session storage data if needed
    localStorage.clear();
    sessionStorage.clear();

    setIsLoggedIn(false);

    // Redirect the user to the login page after logout
    navigate("/login");
  };

  const handleAddImage = () => {
    setIsPopupOpen(true);
  };

  const handleImageInputChange = (e) => {
    // Handle the image selection and set it in the state
    const imageFile = e.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    try {
      // Create a new FormData object and append the selected image to it
      const formData = new FormData();
      formData.append("image", selectedImage);

      // Make the POST request to the backend API
      const response = await axios.post(
        `user/imageUpload/${userData1?.masteruser?.kycdetails?.kyc_id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const fileName = response.data.cus_photo;

      const userResponse = await axios.get(`/user/imageServe/${fileName}`, {
        responseType: "arraybuffer", // Tell axios to treat the response as binary data
      });

      // Convert the received byte array (bytecode) to a URL
      const src3 = URL.createObjectURL(new Blob([userResponse.data]));
      //dispatch({ type: "UPDATE_IMAGE_DETAILS", payload: src3 });
      localStorage.setItem("imageSrc", src3);
      // setImageSrc1(src3);
      // localStorage.setItem("imageSrc", src3);

      setIsPopupOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header>
      <div className="logo">
        <img
          src="https://www.vhv.rs/dpng/d/427-4273719_random-logo-transparent-background-hd-png-download.png"
          alt="xyz"
          height="60px"
        />
        <h1>Omega Banking</h1>
      </div>
      <div className="btn-danger-container btn-container">
        {isLoggedIn && (
          <button className="btn-danger btn">
            <div style={{ cursor: "pointer" }}>
              {imageSrc ? (
                <img
                  // src={imageSrc1}
                  src={imageSrc}
                  alt="Dropdown"
                  height="50px"
                />
              ) : (
                <img
                  src="https://www.vhv.rs/dpng/d/144-1443023_transparent-people-png-icon-people-women-icon-png.png"
                  alt="Dropdown"
                  height="50px"
                />
              )}
            </div>
            <>
              <div className="dropdown">
                <NavLink>
                  <button className="dropdown-item" onClick={handleAddImage}>
                    Add Image
                  </button>
                </NavLink>
                {isPopupOpen && (
                  <div className="popup">
                    <div className="popup-content">
                      <span
                        style={{ backgroundColor: "Highlight" }}
                        className="close-button"
                        onClick={() => setIsPopupOpen(false)}
                      >
                        &times;
                      </span>
                      <h2>Add Image</h2>
                      <form onSubmit={handleImageUpload}>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageInputChange}
                        />
                        <button type="submit">Upload</button>
                      </form>
                    </div>
                  </div>
                )}

                <NavLink to="/" exact activeClassName="active-link">
                  <button className="dropdown-item" onClick={handleLogout}>
                    LogOut
                  </button>
                </NavLink>
              </div>
            </>
          </button>
        )}
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active-link">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active-link">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/accounts" activeClassName="active-link">
                Accounts
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
