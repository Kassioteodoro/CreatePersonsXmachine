import React, { useEffect, useState } from 'react';
import InfoPerson from '../components/InfoPerson';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import generatePDF from '../utils/generatePDF';
import styles from './Pages.module.css'

function ViewPerson() {
  const [person, setPerson] = useState(null)
  const {id} = useParams()
  const NavigateTo = useNavigate();
  
  const fetchPerson = async () => {
    const response = await axios.get(`http://localhost:3001/person/get/${id}`)
    console.log(response);
    setPerson(response.data)
  } 

const newPDF = async () => {
  generatePDF(
    person.imagem, person.nome, person.raça, person.idade, person.vida, person.xp,
    person.magia, person.atributos.força, person.atributos.habilidade, person.atributos.resistencia,
    person.atributos.armadura, person.atributos.inteligencia, person.historia, person.habilidades, person.magias,
    person.vantagens, person.desvantagens, person.equipamento
    )
}
  const DeletePerson = async (e) => {
    const response = await axios.delete(`http://localhost:3001/person/delete/${id}`)
    console.log(response);
    NavigateTo(`/myPersons`)
  } 
  useEffect(() => {
    fetchPerson()
    console.log(person);
  }, [])

  return (
    <div className={styles.ViewBody}>
      {
        person !== null ? 
          <InfoPerson 
          name={person.nome} 
  age={person.idade}
  race={person.raça}
  life={person.vida}
  magicPoint={person.magia}
  XP={person.xp}
  strength={person.atributos.força}
  ability={person.atributos.habilidade}
  resistency={person.atributos.resistencia}
  armor={person.atributos.armadura}
  intelection={person.atributos.inteligencia}
  skills={person.habilidades}
  magicSkills={person.magias}
  benefits={person.vantagens}
  disadvantage={person.desvantagens}
  image={person.imagem}
  history={person.historia}
  equipments={person.equipamento} />
        : null
      }
      <section className={styles.SectionButton1}>
      <button
      className={styles.Button2}
      type="button"
      onClick={() => NavigateTo(`/editorPerson/${id}`)}
      >
      Edit
      </button>
      <button
        className={styles.Button2}
        type="button"
        onClick={() => NavigateTo(-1)}
        >
      Back
      </button>
      <button
      className={styles.Button2}
      type="button"
      onClick={newPDF}
      >
      PDF
      </button>
      <button
      className={styles.Button2}
      type="button"
      onClick={DeletePerson}
      >
      Delete
      </button>
      </section>
  </div>
  );
}

export default ViewPerson;
