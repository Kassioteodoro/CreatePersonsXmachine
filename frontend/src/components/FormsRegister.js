
import React from 'react';

function FormsLogin({
  Register, handleChange, inputName, inputEmail, inputPassword
}) {

  return (
    <forms>
      <input 
      type="text"
      name='Name'
      value={inputName}
      onChange={handleChange} 
      />
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
      onClick={ Register }
      >
        register
      </button>
    </forms>
  );
}

export default FormsLogin;
