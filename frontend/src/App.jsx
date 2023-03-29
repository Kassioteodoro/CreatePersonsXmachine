import axios from 'axios';
import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
function App() {
  const [inputEmail, setInputEmail ] = useState("")
  const [inputPassword, setInputPassword ] = useState(1)

  const handleChange = ({ target: { name, value } }) => {
    if ( name === "Email" ) {
      console.log(name, value);
      setInputEmail(value)
    }
    if ( name === "Password" ) {
      console.log(name, value);
      setInputPassword(value)
    }
  }

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/login',{
        email: inputEmail,
        password: inputPassword,
      })
      setInputEmail('');
      setInputPassword(0);
      console.log(response);
    } catch(err) {
      console.log('aqui oooo',err.message);
    }
  }

  return (
    <div>
      <input 
      type="text"
      name='Email'
      value={inputEmail}
      onChange={handleChange} 
      >
      
      </input>

      <input 
      type="number"
      name='Password'
      value={inputPassword}
      onChange={handleChange}
      >
      
      </input>
      <button
      type="button"
      name='Password'
      onClick={login}
      >
        login
      </button>
    </div>
  );
}

export default App;
