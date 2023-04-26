
import React from 'react';
import styles from "./components.module.css"

function FormsLogin({
  handleChange, inputName, inputEmail, inputPassword
}) {

  return (
    <forms className={styles.FormRegister}>
      <input
      className={styles}
      type="text"
      name='Name'
      value={inputName}
      onChange={handleChange}
      placeholder='surname...' 
      />
      <input 
      className={styles}

      type="text"
      name='Email'
      value={inputEmail}
      onChange={handleChange}
      placeholder='Email...' 

      />
      <input 
      className={styles}

      type="text"
      name='Password'
      value={inputPassword}
      onChange={handleChange}
      placeholder='password...' 

      />
    </forms>
  );
}

export default FormsLogin;
