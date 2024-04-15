import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

// Mock authentication function
const authenticate = () => {
  // You can implement your actual authentication logic here
  return true; // For demonstration, always return true
}

// PrivateRoute component
const PrivateRoute = ({ element: Component, authenticated, ...rest }) => (
  <Route {...rest} element={authenticated === true ? <Component /> : <Navigate to='/login' />} />
);

// Logout component
const Logout = ({ authenticateUser }) => {
  const handleLogout = () => {
    authenticateUser(false);
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

// Login component
const Login = ({ authenticateUser }) => {
  const handleLogin = () => {
    authenticateUser(true);
  }

  return (
    <div className="main-container">
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// Home component (private route)
const Home = () => (
  <div className="main-container">
    <h2>Home Page</h2>
    <p>Welcome to the home page!</p>
  </div>
);

// PublicPage component (accessible to all users)
const PublicPage = () => (
  <div className="main-container">
    <h2>Public Page</h2>
    <p>This page is accessible to all users.</p>
  </div>
);

// App component
const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const authenticateUser = (status) => {
    setAuthenticated(status);
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {authenticated ? (
              <li>
                <Logout authenticateUser={authenticateUser} />
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login authenticateUser={authenticateUser} />} />
          {/* Private route */}
          <PrivateRoute 
            authenticated={authenticated} 
            path="/" 
            element={<Home />} 
          />
          {/* Public route */}
          <Route path="/public" element={<PublicPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

