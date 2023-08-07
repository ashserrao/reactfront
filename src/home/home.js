import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';


const Home = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin'); // Replace '/signin' with the correct path to your sign-in page
  };

  const handleSignUp = () => {
    navigate('/signup'); // Replace '/signup' with the correct path to your sign-up page
  };

  return (
    
    <main >
      
      <div>
      
      <h2>Secure and Convenient Online Banking</h2>
      <p>Manage your accounts and perform transactions from the comfort of your home.</p>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
      </div>

    </main>
    
  );
};

export default Home;
