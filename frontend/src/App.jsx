import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import MyPersons from './pages/MyPersons'

function App() {

  return (
    <div>
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
    </div>
  );
}

export default App;
