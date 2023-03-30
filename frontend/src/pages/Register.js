import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormsRegister from '../components/FormsRegister';

function Login() {

  const NavigateTo = useNavigate();

  return (
    <div>
      <FormsRegister />
      <button
        type="button"
        onClick={() => NavigateTo('/login')}
      >
        voltar
      </button>
    </div>
  );
}

export default Login;