import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import UserHome from './components/User/UserHome';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/me')
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setUserName(data.name);
          setIsLoggedIn(true);
          navigate('/me');
        } else {
          setUserName('');
          setIsLoggedIn(false);
          navigate('/');
        }
      });
  }, [navigate]);

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        setUserName('');
        setIsLoggedIn(false);
        navigate('/');
      });
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <NavBar
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setUserName={setUserName}
              handleLogout={handleLogout}
            />
          }
        ></Route>
        <Route
          path="/me"
          element={
            <>
              <NavBar
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setUserName={setUserName}
                handleLogout={handleLogout}
              />
              <UserHome userName={userName} />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
