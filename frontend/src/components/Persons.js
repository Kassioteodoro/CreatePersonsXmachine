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
    const response = await axios.get(`http://localhost:3001/person/getAll/${user.userId}`)
    console.log(response.data);
    setPersons(response.data)
  } 

  useEffect(() => {
    fetchPersons()
  }, [])

  return (
    <div>
      {
            persons.map((person) => {
              return (
                <div  key={person._id}>
               {person.nome}
                </div>
              );
            })
          }
    </div>
  );
}

export default Persons;