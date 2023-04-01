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
        onClick={() => NavigateTo(-1)}
      >
        voltar
      </button>
    </div>
  );
}

export default Login;
