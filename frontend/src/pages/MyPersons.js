import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import Context from '../context/Context';
import Persons from '../components/Persons';

function MyPersons() {

  return (
    <div>
      <Header />
      <Persons />
    </div>
  );
}

export default MyPersons;
