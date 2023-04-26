import React, { useState} from 'react';
import styles from './Pages.module.css'
import { useNavigate } from 'react-router-dom';
import FormsRegister from '../components/FormsRegister';
import axios from 'axios';

function Register() {
  const [inputEmail, setInputEmail ] = useState("")
  const [inputPassword, setInputPassword ] = useState('')
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
    <div className={styles.RegisterBody}>
      <h1>REGISTER</h1>
      <FormsRegister 
      inputEmail={inputEmail}
      inputName={inputName}
      inputPassword={inputPassword}
      handleChange={handleChange}
      />
      <section className={styles.SectionButton}>
       <button
      className={styles}
      type="button"
      onClick={ Register }
      >
        register
      </button>
      <button
      className={styles}
      type="button"
      onClick={() => NavigateTo(-1)}
      >
        voltar
      </button>
        </section>
    </div>
  );
}

export default Register;
