
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormsLogin from '../components/FormsLogin';

function Login() {
  const [inputEmail, setInputEmail ] = useState("")
  const [inputPassword, setInputPassword ] = useState(1)
  
  const NavigateTo = useNavigate();
  
  const handleChange = ({ target: { name, value } }) => {
    if ( name === "Email" ) {
      setInputEmail(value)
    }
    if ( name === "Password" ) {
      setInputPassword(value)
    }
  }

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/login',{
        email: inputEmail,
        password: Number(inputPassword),
      })
      console.log(response);
      if (response.data) {
        setInputEmail('');
        setInputPassword(0);
        localStorage.setItem('user', JSON.stringify({userId: response.data.id, userName: response.data.name}));
        return NavigateTo("/myPersons")
      } 
      console.log("Error");
    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <FormsLogin 
        handleChange={handleChange}
        login={login}
        inputEmail={inputEmail}
        inputPassword={inputPassword}
      />
      <button
        type="button"
        onClick={() => console.log("em breve")}
      >
        fast create
      </button>
      <button
        type="button"
        onClick={() => NavigateTo("/register")}
      >
        register
      </button>
    </div>
  );
}

export default Login;
