import React from 'react';
import styles from "./components.module.css"
import { useNavigate } from 'react-router-dom';

function Login() {
  const NavigateTo = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className={styles.Header}>
      <div className={styles.Name}>
      <h3>{user.userName}</h3>
      </div>
      <button
        className={styles.Button2}
        type="button"
        onClick={() => NavigateTo('/myPersons')}
      >
        My Persons
      </button>
      <button
        className={styles.Button2}
        type="button"
        onClick={() => NavigateTo('/create')}
        >
        Create
      </button>
      <button
        className={styles.Button2}
        type="button"
        onClick={() => {
          localStorage.clear();
          NavigateTo('/login')

        }}
        >
        Exit
      </button>
    </div>
  );
}

export default Login;
