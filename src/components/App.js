import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

// Mock authentication function
const authenticate = () => {
  return true; // For demonstration, always return true
}

// PrivateRoute component
const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    authenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

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
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Route path="/login">
          <Login authenticateUser={authenticateUser} />
        </Route>
        
        {/* Private route */}
        <PrivateRoute 
          authenticated={authenticated} 
          path="/" 
          component={Home} 
        />
      </div>
    </Router>
  );
}

export default App;
