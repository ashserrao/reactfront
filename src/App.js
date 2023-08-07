import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import UserProfilePage from "./admin/UserProfilePage";
import LoginPage from "./login/login";
import RegistrationForm from "./registration/registration";
import Home from "./home/home";
import Header from "./static/header";
import Footer from "./static/footer";
import PrivateRoutes from "./PrivateRoutes";
import PrivateRouteUser from "./PrivateRouteUser";
import Accounts from "./admin/Accounts";
import { Provider } from "react-redux";
import store from "./store";
import TransactionPage from "./transaction/transaction";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login and set isLoggedIn to true
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header
            className="header"
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<RegistrationForm />} />
              <Route
                path="/signin"
                element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
              />

              <Route path="/transactions" element={<TransactionPage />} />

              <Route element={<PrivateRoutes />}>
                <Route path="/accounts" element={<Accounts />} />
              </Route>

              <Route element={<PrivateRouteUser isLoggedIn={isLoggedIn} />}>
                <Route path="/profile" element={<UserProfilePage />} />
              </Route>
            </Routes>
          </div>
          <Footer className="footer" />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
