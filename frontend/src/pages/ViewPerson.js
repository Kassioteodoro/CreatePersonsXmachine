import React, { useEffect, useState } from 'react';
import InfoPerson from '../components/InfoPerson';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import generatePDF from '../utils/generatePDF';
function ViewPerson() {
  const [person, setPerson] = useState(null)
  const {id} = useParams()
  const NavigateTo = useNavigate();
  
  const fetchPerson = async () => {
    const response = await axios.get(`http://localhost:3001/person/get/${id}`)
    console.log(response);
    setPerson(response.data)
  } 

// const newPDF = async () => {
//   generatePDF(
//     image, name, race, age, life, XP,
//     magicPoint, strength, ability, resistency,
//     armor, intelection, history, skills, magicSkills,
//     benefits, disadvantage, equipments
//     )
// }
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
    <div>
      <button
      type="button"
      onClick={() => NavigateTo(`/editorPerson/${id}`)}
      >
      Editar
      </button>
      <button
        type="button"
        onClick={() => NavigateTo(-1)}
      >
      voltar
      </button>
      <button
      type="button"
      onClick={() => console.log("em breve")}
      >
      PDF
      </button>
      <button
      type="button"
      onClick={DeletePerson}
      >
      Delete
      </button>
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
  </div>
  );
}

export default ViewPerson;
