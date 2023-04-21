import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import MyPersons from './pages/MyPersons'
import Create from './pages/Create';
import ViewPerson from './pages/ViewPerson';
import FastPerson from './pages/FastPerson';
import './index.css';
import EditorPerson from './pages/EditorPerson';

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
            path="/createFast"
            element={ <FastPerson/>}
          />
          <Route 
            path="/myPersons"
            element={ <MyPersons/>}
          />
          <Route 
            path="/create"
            element={ <Create/>}
          />
          <Route 
            path="/viewPerson/:id"
            element={ <ViewPerson/>}
            />
          <Route 
            path="/editorPerson/:id"
            element={ <EditorPerson/>}
            />
        </Routes>
    </div>
  );
}

export default App;
