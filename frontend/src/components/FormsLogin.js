
import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

import axios from 'axios';
function FormsLogin() {
  const [inputEmail, setInputEmail ] = useState("")
  const [inputPassword, setInputPassword ] = useState(1)
  // const { user, setUser } = useContext(UserContext);

  const NavigateTo = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    if ( name === "Email" ) {
      console.log(name, value);
      // console.log(user);
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
      if (response.data) {
        setInputEmail('');
        setInputPassword(0);
        return NavigateTo("/myPersons")
      } 
      // setUser({
      //   userID: response.data.id,
      //   name: response.data.name
      // })
      console.log("Error");
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
