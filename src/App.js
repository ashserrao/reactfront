import React from 'react';
import './App.css';
import { LoginPage } from './login';
import { RegistrationForm } from './registration';
import {BenificiesDetails} from './user';
import { NavLink, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <img
            src="https://www.vhv.rs/dpng/d/427-4273719_random-logo-transparent-background-hd-png-download.png"
            height="60px"
          />
          <h1>Omega Banking</h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/accounts">Account</a>
              </li>
              <li>
                <NavLink to="/benificies"><a>Benificies</a></NavLink>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Navbar /> */}
        <main>
          <h2>Secure and Convenient Online Banking</h2>
          <p>
            Manage your accounts and perform transactions from the comfort of
            your home.
          </p>
          <NavLink to="/login"><button>Login</button></NavLink>
          <NavLink to="/registrationform"><button>Register</button></NavLink>
          <div className='formspace'>
          <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registrationform' element={<RegistrationForm/>}/>
        <Route path='/benificies' element={<BenificiesDetails/>}/>
        </Routes>
          </div>
        </main>
        {/* <Customerdetails/> */}
        <footer>
          <p>
            &copy; {new Date().getFullYear()} Omega Banking. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
