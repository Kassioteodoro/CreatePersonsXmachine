import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const NavigateTo = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <button
        type="button"
        onClick={() => NavigateTo('/myPersons')}
      >
        My Persons
      </button>
      <button
        type="button"
        onClick={() => NavigateTo('/create')}
      >
        Create
      </button>
      <h3>{user.userName}</h3>
    </div>
  );
}

export default Login;
