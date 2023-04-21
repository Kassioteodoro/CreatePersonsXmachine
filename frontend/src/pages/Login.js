import styles from './Pages.module.css'
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormsLogin from '../components/FormsLogin';
import logo from '../images/logo.png';

function Login() {
  const [inputEmail, setInputEmail ] = useState("")
  const [inputPassword, setInputPassword ] = useState("")
  
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
        password: inputPassword,
      })
      console.log(response);
      if (response.data) {
        setInputEmail('');
        setInputPassword('');
        localStorage.setItem('user', JSON.stringify({userId: response.data.id, userName: response.data.name}));
        return NavigateTo("/myPersons")
      } 
      console.log("Error");
    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <div className={ styles.loginAndRegister}>
       <img
                  height={ 300 }
                  width={ 200 }
                  src={logo}
                  // alt={ name }
                  />
      <div className={ styles.containerloginAndRegister}>
      <FormsLogin 
        handleChange={handleChange}
        inputEmail={inputEmail}
        inputPassword={inputPassword}
        />
      <div className={styles.containerButton}>
        <button
      className={styles.button}
      type="button"
      onClick={ login }
      >
        login
      </button>
      <button
      className={styles.button}
        type="button"
        onClick={() => NavigateTo("/register")}
      >
        register
      </button>
      </div>
      <button
      className={styles.button}
      type="button"
      onClick={() => NavigateTo("/createFast")}
      >
        fast create
      </button>
        </div>
    </div>
  );
}

export default Login;
