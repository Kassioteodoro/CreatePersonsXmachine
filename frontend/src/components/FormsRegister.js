
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function FormsLogin() {
  const [inputEmail, setInputEmail ] = useState("")
  const [inputPassword, setInputPassword ] = useState(1)
  const [inputName, setInputName ] = useState("")
  
  const NavigateTo = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    if ( name === "Name" ) {
      console.log(name, value);
      setInputName(value)
    }
    if ( name === "Email" ) {
      console.log(name, value);
      setInputEmail(value)
    }
    if ( name === "Password" ) {
      console.log(name, value);
      setInputPassword(value)
    }
  }
  

  const Register = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/register',{
        name: inputName,
        email: inputEmail,
        password: inputPassword,
      })
      setInputName('');
      setInputEmail('');
      setInputPassword(0);
      NavigateTo('/login')
      console.log(response);
    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <forms>
      <input 
      type="text"
      name='Name'
      value={inputName}
      onChange={handleChange} 
      />
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
      onClick={ Register }
      >
        register
      </button>
    </forms>
  );
}

export default FormsLogin;
