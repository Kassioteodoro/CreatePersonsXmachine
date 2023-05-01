import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormsPerson from '../components/FormsPerson';
import generatePDF from '../utils/generatePDF';
import styles from './Pages.module.css'
import fastCreate from '../images/FastCreate.png';
import Compress from 'compress.js'

function FastPerson() {
const [name, setname ] = useState('')
const [age, setage ] = useState(0)
const [race, setrace ] = useState('')
const [life, setlife ] = useState(0)
const [magicPoint, setmagicPoint ] = useState(0)
const [XP, setXP ] = useState(0)
const [strength, setstrength ] = useState(0)
const [ability, setability ] = useState(0)
const [resistency, setresistency ] = useState(0)
const [armor, setarmor ] = useState(0)
const [intelection, setintelection ] = useState(0)
const [skills, setskills ] = useState([])
const [magicSkills, setmagicSkills ] = useState([])
const [benefits, setbenefits ] = useState([])
const [disadvantage, setdisadvantage ] = useState([])
const [image, setimage ] = useState('')
const [history, sethistory ] = useState('')
const [equipments, setEquipments ] = useState([])
const [prevEquipment, setPrevEquipment ] = useState('')
const [prevSkills, setPrevSkills ] = useState('')
const [prevMagicSkills, setPrevMagicSkills ] = useState('')
const [prevBenefits, setPrevBenefits ] = useState('')
const [prevDisadvantage, setPrevDisadvantage ] = useState('')

const compress = new Compress()

const addList = ({ target: { name } }) => {
  switch(name) {
    case "equipment":
      if (prevEquipment !== '') 
        setEquipments((prev) => [...prev, prevEquipment])
        setPrevEquipment('')
      break;
    case "skills":
      if (prevSkills !== '') 
        setskills((prev) => [...prev, prevSkills])
        setPrevSkills('')
      break;
    case "magicSkills":
      if (prevMagicSkills !== '') 
        setmagicSkills((prev) => [...prev, prevMagicSkills])
        setPrevMagicSkills('')
      break;
    case "benefits":
      if (prevBenefits !== '') 
        setbenefits((prev) => [...prev, prevBenefits])
        setPrevBenefits('')
      break;
    case "disadvantage":
      if (prevDisadvantage !== '') 
        setdisadvantage((prev) => [...prev, prevDisadvantage])
        setPrevDisadvantage('')
      break;  
  }
}

const removeList = ({ target: { name } }) => {
  switch(name) {
    case "equipment":
      if (prevEquipment !== '') 
        setEquipments((prev) => prev.filter((value) => value !== prevEquipment))
        setPrevEquipment('')
      break;
    case "skills":
      if (prevSkills !== '') 
        setskills((prev) => prev.filter((value) => value !== prevSkills))
        setPrevSkills('')
      break;
    case "magicSkills":
      if (prevMagicSkills !== '') 
        setmagicSkills((prev) => prev.filter((value) => value !== prevMagicSkills))
        setPrevMagicSkills('')
      break;
    case "benefits":
      if (prevBenefits !== '') 
        setbenefits((prev) => prev.filter((value) => value !== prevBenefits))
        setPrevBenefits('')
      break;
    case "disadvantage":
      if (prevDisadvantage !== '') 
        setdisadvantage((prev) => prev.filter((value) => value !== prevDisadvantage))
        setPrevDisadvantage('')
      break;  
  }
}

const validName = name.length >= 1 
const validHistory = history.length <= 84 
const validEquipament = equipments.length <= 9 
const validSkills = skills.length <= 9 
const validBenefits = benefits.length <= 9 
const validDisadvantage = disadvantage.length <= 9 
const validMagicSkills = magicSkills.length <= 9 
const validButton = validName && validHistory && validEquipament &&
                     validSkills && validBenefits && validDisadvantage &&
                      validMagicSkills

  const NavigateTo = useNavigate();

  const handleChange = async ({ target: { value, name, files } }) => {
    // console.log(value);
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
    const result = await compress.compress([...files], {
      size: 1,
      quality: 0.5,
      maxWidth: 400, 
      maxHeight: 700, 
      resize: true
  })
    console.log(result[0]);
    const img = result[0].data
    setimage(img)
    break;
    case "history" : 
    console.log("oi");
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

const newPDF = async () => {
  generatePDF(
    image, name, race, age, life, XP,
    magicPoint, strength, ability, resistency,
    armor, intelection, history, skills, magicSkills,
    benefits, disadvantage, equipments
    )
}
  return (
    <div
    className={styles.FastCreateBody}
    >
          <img
                  width={ 300 }
                  src={fastCreate}
                  alt={ "Fast Create" }
                  />
      <FormsPerson 
  handleChange={handleChange}
  addList={addList}
  removeList={removeList}
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
  prevSkills={prevSkills}
  prevMagicSkills={prevMagicSkills}
  prevBenefits={prevBenefits}
  prevDisadvantage={prevDisadvantage}
  prevEquipment={prevEquipment}
  />
  <section className={styles.SectionButton}>
      <button
      className={styles.Button1}
        type="button"
        onClick={newPDF}
        disabled={!validButton}
      >
        PDF
    </button>
    <button
        className={styles.Button1}
        type="button"
        onClick={() => NavigateTo(-1)}
        >
        Back
    </button>
        </section>
    </div>
  );
}

export default FastPerson;