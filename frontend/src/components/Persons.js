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
    <div className={styles.PersonBody}>
      {
        persons.length > 0 ?
            persons.map((person) => {
              return (
                <div 
                className={styles.PersonCard}
                onClick={ () => NavigateTo(`/viewPerson/${person._id}`)}
                >
                 <h3>
                  {person.nome}
                  </h3>
                 <h4>
                 {person.raça}
                 </h4>
                 <img
                 className={styles.ImagePerson}
                  height={ 250 }
                  width={ 200 }
                  src={ person.imagem }
                  alt={ person.name }
                />
              </div>
              );
            })
          : "not persons"
          }
    </div>
  );
}

export default Persons;
