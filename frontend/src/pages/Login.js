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
    <div className={styles.LoginBody}>
       <img
                  width={ 300 }
                  src={logo}
                  alt={ "logo, Create Person X Machine" }
                  />
      <FormsLogin 
        handleChange={handleChange}
        inputEmail={inputEmail}
        inputPassword={inputPassword}
        />
      <section className={styles.SectionButton}>
        <button
        className={styles.Button1}
        type="button"
        onClick={ login }
        >
        Login
        </button>
        <button
        className={styles.Button1}
        type="button"
        onClick={() => NavigateTo("/register")}
        >
        Register
        </button>
        <button
        className={styles.Button1}
        type="button"
        onClick={() => NavigateTo("/createFast")}
        >
        fast Create
        </button>
      </section>
    </div>
  );
}

export default Login;
