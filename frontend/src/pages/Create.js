import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function Create() {

  const NavigateTo = useNavigate();

  return (
    <div>
      <Header />
      Create
    </div>
  );
}

export default Create;
