import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormsPerson from '../components/FormsPerson';
import styles from './Pages.module.css'
import axios from 'axios';

function EditorPerson() {
const [name, setname ] = useState(null)
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
  setskills(response.data.habilidades)
  setmagicSkills(response.data.magias)
  setbenefits(response.data.vantagens)
  setdisadvantage(response.data.desvantagens)
  setimage(response.data.imagem)
  sethistory(response.data.historia)
  setEquipments(response.data.equipamento)
} 

useEffect(() => {
  fetchPerson()
  console.log(id);
}, [])

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

const validHistory = history.length <= 84 
const validEquipament = equipments.length <= 9 
const validSkills = skills.length <= 9 
const validBenefits = benefits.length <= 9 
const validDisadvantage = disadvantage.length <= 9 
const validMagicSkills = magicSkills.length <= 9 
const validButton = () => {
    if (name !== null ) {
    const validName = name.length >= 1 

      return validName && validHistory && validEquipament &&
      validSkills && validBenefits && validDisadvantage &&
      validMagicSkills
    }
    return false
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
          habilidades: skills,
          magias: magicSkills,
          vantagens: benefits,
          desvantagens: disadvantage,
          equipamento: equipments,
        }
      )
      console.log("response", response);
      NavigateTo(-1)
    } catch(err) {
      console.log(err.message);
    }
  }

  const handleChange = ({ target: { value, name,files } }) => {
    // console.log(files[0]);
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
  const reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = () => {

    console.log(reader.result);
    setimage(reader.result)
  }
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
    <div className={ styles.EditBody}>


      <h1>
      EDITOR
      </h1>
      {
        name !== null ? 
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
  : null
}
<section className={styles.SectionButton}>


    <button
        className={styles.Button1}
        type="button"
        onClick={editor}
        disabled={!validButton()}
      >
        Edit
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
    </div>
  );
}

export default EditorPerson;