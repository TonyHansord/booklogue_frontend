import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import SignupLogin from './components/User/SignupLogin';

function App() {
  const [show, setShow] = useState(false);
  const [authType, setAuthType] = useState('Log In');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (authType) => {
    setAuthType(authType);
    setShow(true);
  };
  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => console.log(data.message))
      .then(setIsLoggedIn(false));
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <Button
            variant="btn btn-outline-primary"
            onClick={() => handleLogout()}
          >
            Log Out
          </Button>
        ) : (
          <Button
            variant="btn btn-outline-primary"
            onClick={() => handleShow('Log In')}
          >
            Log In
          </Button>
        )}

        {isLoggedIn ? null : (
          <Button
            variant="btn btn-primary"
            onClick={() => handleShow('Sign Up')}
          >
            Signup
          </Button>
        )}

        <SignupLogin
          show={show}
          handleClose={handleClose}
          authType={authType}
          setIsLoggedIn={setIsLoggedIn}
        />
      </header>
    </div>
  );
}

export default App;
