import React, { useEffect, useState } from 'react';
import InfoPerson from '../components/InfoPerson';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function ViewPerson() {
  const [person, setPerson] = useState({})
  const {id} = useParams()
  
  const fetchPerson = async () => {
    const response = await axios.get(`http://localhost:3001/person/get/${id}`)
    console.log(response);
    setPerson(response.data)
  } 
  useEffect(() => {
    fetchPerson()
    console.log(person);
  }, [])
  return (
    <div>
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
    </div>
  );
}

export default ViewPerson;
