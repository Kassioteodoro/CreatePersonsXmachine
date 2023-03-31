import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function MyPersons() {

  const NavigateTo = useNavigate();

  return (
    <div>
      <Header />
      Persons
    </div>
  );
}

export default MyPersons;
