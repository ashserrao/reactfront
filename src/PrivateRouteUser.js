// import React from 'react';
// import UserProfilePage from './admin/UserProfilePage';
// import { useNavigate } from 'react-router-dom';
// //import LoginPage from './login/login';
// //import Home from './home/home';

// const PrivateRouteUser = ({isLoggedIn}) => {
//     const navigate = useNavigate();
//    return (isLoggedIn) ? <UserProfilePage />:navigate('/');
// };

// export default PrivateRouteUser;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfilePage from './admin/UserProfilePage';
import LoginPage from './login/login';

const PrivateRouteUser = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  // Redirect to /login if isLoggedIn becomes false
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/signin');
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? <UserProfilePage /> : <LoginPage />;
};

export default PrivateRouteUser;
