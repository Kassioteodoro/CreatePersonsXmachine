import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FormsRegister from '../components/FormsRegister';
import axios from 'axios';

function Login() {
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
      await axios.post('http://localhost:3000/user/register',{
        name: inputName,
        email: inputEmail,
        password: inputPassword,
      })
      setInputName('');
      setInputEmail('');
      setInputPassword(0);
      NavigateTo('/login')
    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <FormsRegister 
      inputEmail={inputEmail}
      inputName={inputName}
      inputPassword={inputPassword}
      Register={Register}
      handleChange={handleChange}
      />
      <button
        type="button"
        onClick={() => NavigateTo(-1)}
      >
        voltar
      </button>
    </div>
  );
}

export default Login;
