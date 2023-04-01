import React, {useState} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import MyPersons from './pages/MyPersons'
import Context from './context/Context';
import ThemeContext from './context/Context';
import Create from './pages/Create';
import UserContext from './context/UserContext';

function App() {
  const [user, setUser ] = useState(UserContext) 
  return (
    <div>
      <ThemeContext.Provider value={{user, setUser}}>
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
          <Route 
            path="/create"
            element={ <Create/>}
          />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
