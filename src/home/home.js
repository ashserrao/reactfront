import React from 'react';
import ReactDOM from 'react-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to My Bank</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/accounts">Accounts</a></li>
              <li><a href="/transactions">Transactions</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <h2>Secure and Convenient Online Banking</h2>
          <p>Manage your accounts and perform transactions from the comfort of your home.</p>
          <button>Sign In</button>
          <button>Sign Up</button>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} My Bank. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<HomePage />, document.getElementById('root'));
