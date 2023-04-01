import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import Context from '../context/Context';

function Persons() {
  const [persons, setPersons] = useState([])
  const NavigateTo = useNavigate();
  const { user, setUser } = useContext(Context)
  
  const fetchPersons = async () => {
    console.log(user);
    const response = await axios.get(`http://localhost:3001/person/getAll/${1}`)
    console.log(response);
  } 

  useEffect(() => {
    fetchPersons()
  }, [])

  return (
    <div>
      Persons
    </div>
  );
}

export default Persons;