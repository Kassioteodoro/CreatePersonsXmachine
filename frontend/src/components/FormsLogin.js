
import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

function FormsLogin() {
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
      console.log(err.message);
    }
  }

  return (
    <forms>
        <input 
      type="text"
      name='Email'
      value={inputEmail}
      onChange={handleChange} 
      />
      <input 
      type="number"
      name='Password'
      value={inputPassword}
      onChange={handleChange}
      />
       <button
      type="button"
      onClick={ login }
      >
        login
      </button>
    </forms>
  );
}

export default FormsLogin;
