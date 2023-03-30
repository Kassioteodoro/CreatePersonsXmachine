import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormsLogin from '../components/FormsLogin';
function Login() {
  const NavigateTo = useNavigate();

  return (
    <div>
      <FormsLogin />
      <button
        type="button"
        onClick={() => console.log("embreve")}
      >
        fast create
      </button>
      <button
        type="button"
        onClick={() => NavigateTo("/register")}
      >
        register
      </button>
    </div>
  );
}

export default Login;
