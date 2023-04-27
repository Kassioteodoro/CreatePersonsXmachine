
import React from 'react';
import styles from "./components.module.css"

function FormsLogin({
  handleChange, inputName, inputEmail, inputPassword
}) {

  return (
    <forms className={styles.FormRegister}>
      <input
      className={styles.Input1}
      type="text"
      name='Name'
      value={inputName}
      onChange={handleChange}
      placeholder='Surname...' 
      />
      <input 
      className={styles.Input1}

      type="text"
      name='Email'
      value={inputEmail}
      onChange={handleChange}
      placeholder='Email...' 

      />
      <input 
      className={styles.Input1}

      type="text"
      name='Password'
      value={inputPassword}
      onChange={handleChange}
      placeholder='Password...' 

      />
    </forms>
  );
}

export default FormsLogin;
