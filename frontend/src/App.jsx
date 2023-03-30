import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'

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
        </Routes>
    </div>
  );
}

export default App;
