import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import MyPersons from './pages/MyPersons'
import Context from './context/Context';
import UserContext from './context/UserContext';

function App() {

  return (
    <div>
      <Context.Provider value={UserContext}>
        <Routes>
          <Route 
            exact path="/" 
            element={ <Navigate to="/login" replace/> } />
          <Route 
            path="/login"
            element={ <Login/>}
          />
          <Route 
            path="/register"
            element={ <Register/>}
          />
          <Route 
            path="/myPersons"
            element={ <MyPersons/>}
          />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
