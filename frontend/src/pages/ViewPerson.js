import React, { useEffect, useState } from 'react';
import InfoPerson from '../components/InfoPerson';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function ViewPerson() {
  const [person, setPerson] = useState({
    atributos: {
      armadura: 0,
      força: 0,
      habilidade: 0,
      inteligencia: 0,
      resistencia: 0,
    }
  })
  const {id} = useParams()
  const NavigateTo = useNavigate();
  
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
