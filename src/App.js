import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import SignupLogin from './components/User/SignupLogin';

function App() {
  const [show, setShow] = useState(false);
  const [authType, setAuthType] = useState('Log In');

  const handleClose = () => setShow(false);
  const handleShow = (authType) => {
    setAuthType(authType);
    setShow(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button
          variant="btn btn-outline-primary"
          onClick={() => handleShow('Log In')}
        >
          Login
        </Button>
        <Button variant="btn btn-primary" onClick={() => handleShow('Sign Up')}>
          Signup
        </Button>
        <SignupLogin
          show={show}
          handleClose={handleClose}
          authType={authType}
        />
      </header>
    </div>
  );
}

export default App;
