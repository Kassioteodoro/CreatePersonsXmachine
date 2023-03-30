import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const NavigateTo = useNavigate();

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
      <h3>Name</h3>
    </div>
  );
}

export default Login;
