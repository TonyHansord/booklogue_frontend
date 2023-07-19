import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SignupLogin from './User/SignupLogin';

function NavBar({ isLoggedIn, setIsLoggedIn, setUserName, handleLogout }) {
  const [show, setShow] = useState(false);
  const [authType, setAuthType] = useState('Log In');

  const handleClose = () => setShow(false);
  const handleShow = (authType) => {
    setAuthType(authType);
    setShow(true);
  };

  return (
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
        <Button variant="btn btn-primary" onClick={() => handleShow('Sign Up')}>
          Signup
        </Button>
      )}

      <SignupLogin
        show={show}
        handleClose={handleClose}
        authType={authType}
        setIsLoggedIn={setIsLoggedIn}
        setUserName={setUserName}
      />
    </header>
  );
}

export default NavBar;
