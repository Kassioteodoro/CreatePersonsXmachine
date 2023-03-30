import React from 'react';
import FormsLogin from '../components/FormsLogin';
function Login() {

  return (
    <div>
      <FormsLogin />
      <button
        type="button"
        onClick={() => console.log("eu")}
      >
        fast create
      </button>
      <button
        type="button"
        onClick={() => console.log("eu")}
      >
        register
      </button>
    </div>
  );
}

export default Login;
