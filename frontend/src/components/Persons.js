import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./components.module.css"
import axios from 'axios';

function Persons() {
  const [persons, setPersons] = useState([])
  const NavigateTo = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  
  const fetchPersons = async () => {
    const response = await axios.get(`http://localhost:3001/person/getAll/${user.userId}`)
    console.log(response.data);
    setPersons(response.data)
  } 

  useEffect(() => {
    fetchPersons()
  }, [])

  return (
    <div className={styles.PersonList}>
      {
        persons.length > 0 ?
            persons.map((person) => {
              return (
                <div 
                className={styles.CardPerson}
                onClick={ () => NavigateTo(`/viewPerson/${person._id}`)}
                >
                 <br/>
                 <br/>
                 <h3>
                  {person.nome}
                  </h3>
                 <br/>
                 <h4>
                 {person.raça}
                 </h4>
                 <br/>
                 <img
                  height={ 250 }
                  width={ 200 }
                  src={ person.imagem }
                  alt={ person.name }
                />
                <br/>
                <br/>
              </div>
              );
            })
          : "not persons"
          }
    </div>
  );
}

export default Persons;
