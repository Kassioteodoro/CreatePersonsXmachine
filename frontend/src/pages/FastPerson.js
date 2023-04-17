import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormsPerson from '../components/FormsPerson';
// import axios from 'axios';

function FastPerson() {
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

const generatePDF = async () => {
  console.log("PDF");
}
  return (
    <div>
      <h1>
      Create Fast
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
        onClick={() => console.log("em breve")}
      >
        PDF
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

export default FastPerson;