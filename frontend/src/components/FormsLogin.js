
import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import axios from 'axios';

function FormsLogin() {
  const [inputEmail, setInputEmail ] = useState("")
  const [inputPassword, setInputPassword ] = useState(1)
  const {user, setUser} = useContext(Context);

  const NavigateTo = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    if ( name === "Email" ) {
      console.log(name, value);
      console.log("user",user);
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
      console.log(response);
      if (response.data) {
        setInputEmail('');
        setInputPassword(0);
       setUser({userId: response.data.id, userName: response.data.name})
        return NavigateTo("/myPersons")
      } 
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
