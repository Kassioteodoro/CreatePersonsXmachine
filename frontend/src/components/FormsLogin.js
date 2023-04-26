import styles from "./components.module.css"
import React from 'react';

function FormsLogin({
  handleChange,
  inputEmail, inputPassword,}) {

  return (
    <forms className={styles.FormLogin}>
        <input 
        className={styles.InputLogin}
      type="text"
      name='Email'
      value={inputEmail}
      onChange={handleChange} 
      placeholder="  Email..."
      />
      <input 
        className={styles.InputLogin}
      type="text"
      name='Password'
      value={inputPassword}
      onChange={handleChange}
      placeholder="  Password..."
      />
    </forms>
  );
}

export default FormsLogin;
