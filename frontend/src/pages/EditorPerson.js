import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormsPerson from '../components/FormsPerson';
import axios from 'axios';

function EditorPerson() {
const [name, setname ] = useState('')
const [age, setage ] = useState('')
const [race, setrace ] = useState('')
const [life, setlife ] = useState('')
const [magicPoint, setmagicPoint ] = useState('')
const [XP, setXP ] = useState('')
const [strength, setstrength ] = useState('')
const [ability, setability ] = useState('')
const [resistency, setresistency ] = useState('')
const [armor, setarmor ] = useState('')
const [intelection, setintelection ] = useState('')
const [skills, setskills ] = useState('')
const [magicSkills, setmagicSkills ] = useState('')
const [benefits, setbenefits ] = useState('')
const [disadvantage, setdisadvantage ] = useState('')
const [image, setimage ] = useState('')
const [history, sethistory ] = useState('')
const [equipments, setEquipments ] = useState('')
const [prevEquipment, setPrevEquipment ] = useState('')
const [prevSkills, setPrevSkills ] = useState('')
const [prevMagicSkills, setPrevMagicSkills ] = useState('')
const [prevBenefits, setPrevBenefits ] = useState('')
const [prevDisadvantage, setPrevDisadvantage ] = useState('')

const {id} = useParams()
const user = JSON.parse(localStorage.getItem('user'));

const fetchPerson = async () => {
  const response = await axios.get(`http://localhost:3001/person/get/${id}`)
  console.log(response);
  setname(response.data.nome)
  setage(response.data.idade)
  setrace(response.data.raça)
  setlife(response.data.vida)
  setmagicPoint(response.data.magia)
  setXP(response.data.xp)
  setstrength(response.data.atributos.força)
  setability(response.data.atributos.habilidade)
  setresistency(response.data.atributos.resistencia)
  setintelection(response.data.atributos.inteligencia)
  setskills(response.data.habilidades[0])
  setmagicSkills(response.data.magias[0])
  setbenefits(response.data.vantagens[0])
  setdisadvantage(response.data.desvantagens[0])
  setimage(response.data.imagem)
  sethistory(response.data.historia)
  setEquipments(response.data.equipamento[0])
} 

useEffect(() => {
  fetchPerson()
  console.log(id);
}, [])

const addList = ({ target: { name } }) => {
  switch(name) {
    case "equipment":
      equipments === '' ? setEquipments(prevEquipment) : setEquipments((prev) => ` ${prev}, ${prevEquipment}`)
      break;
    case "skills":
        skills === '' ? setskills(prevSkills) : setskills((prev) => ` ${prev}, ${prevSkills}`)
      break;
    case "magicSkills":
          magicSkills === '' ? setmagicSkills(prevMagicSkills) : setmagicSkills((prev) => ` ${prev}, ${prevMagicSkills}`)
      break;
    case "benefits":
          benefits === '' ? setbenefits(prevBenefits) : setbenefits((prev) => ` ${prev}, ${prevBenefits}`)
      break;
    case "disadvantage":
          disadvantage === '' ? setdisadvantage(prevDisadvantage) : setdisadvantage((prev) => ` ${prev}, ${prevDisadvantage}`)
      break;  
  }
}

  const NavigateTo = useNavigate();

  const editor = async (e) => {
    try {
      const response = await axios.put(`http://localhost:3001/person/update/${id}`,
        {
          userId: user.userId,
          nome: name,
          raça: race,
          idade: age,
          vida: life,
          magia: magicPoint,
          xp: XP,
          imagem: image,
          historia: history,
          atributos: {
            força: strength,
            habilidade: ability,
            resistencia: resistency,
            inteligencia: intelection,
            armadura: armor,
          },
          habilidades: [skills],
          magias: [magicSkills],
          vantagens: [benefits],
          desvantagens: [disadvantage],
          equipamento: [equipments],
        }
      )
      console.log("response", response);
      NavigateTo(-1)
    } catch(err) {
      console.log(err.message);
    }
  }

  const handleChange = ({ target: { value, name } }) => {
    console.log(value);
    switch (name) {
      case "name" :
    setname(value)
    break;
  case "age" :
    setage(value)
    break;
  case "race" : 
    setrace(value)
    break;
  case "life" : 
    setlife(value)
    break;
  case "magicPoint" : 
    setmagicPoint(value)
    break;
  case "XP" : 
    setXP(value)
    break;
  case "strength" : 
    setstrength(value)
    break;
  case "ability" : 
    setability(value)
    break;
  case "resistency" : 
    setresistency(value)
    break;
  case "armor" : 
    setarmor(value)
    break;
  case "intelection" : 
    setintelection(value)
    break;
  case "image" : 
    setimage(value)
    break;
    case "history" : 
    sethistory(value)
    break;
    case "prevEquipment":
      setPrevEquipment(value)
    break;
    case "prevDisadvantage":
      setPrevDisadvantage(value)
    break;
    case "prevBenefits":
      setPrevBenefits(value)
    break;
    case "prevMagicSkills":
      setPrevMagicSkills(value)
    break;
    case "prevSkills":
      setPrevSkills(value)
    break;
  }
}

  return (
    <div>
      <h1>
      EDITOR
      </h1>
      <FormsPerson 
  handleChange={handleChange}
  addList={addList}
  name={name} 
  age={age}
  race={race}
  life={life}
  magicPoint={magicPoint}
  XP={XP}
  strength={strength}
  ability={ability}
  resistency={resistency}
  armor={armor}
  intelection={intelection}
  skills={skills}
  magicSkills={magicSkills}
  benefits={benefits}
  disadvantage={disadvantage}
  image={image}
  history={history}
  equipments={equipments}
  />
    <button
        type="button"
        onClick={editor}
      >
        Editar
    </button>
    <button
        type="button"
        onClick={() => NavigateTo(-1)}
      >
        voltar
    </button>
    </div>
  );
}

export default EditorPerson;