
import React from 'react';

function FormsLogin({
  handleChange,login,
  inputEmail, inputPassword,}) {

  return (
    <forms>
        <input 
      type="text"
      name='Email'
      value={inputEmail}
      onChange={handleChange} 
      />
      <input 
      type="number"
      name='Password'
      value={inputPassword}
      onChange={handleChange}
      />
       <button
      type="button"
      onClick={ login }
      >
        login
      </button>
    </forms>
  );
}

export default FormsLogin;
