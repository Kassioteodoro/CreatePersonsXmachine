import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FormsPerson from '../components/FormsPerson';
import axios from 'axios';

function Create() {
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
const [equipments, setequipments ] = useState('')
  
  const NavigateTo = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

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
  case "skills" : 
    setskills(value)
    break;
  case "magicSkills" : 
    setmagicSkills(value)
    break;
  case "benefits" : 
    setbenefits(value)
    break;
  case "disadvantage" : 
    setdisadvantage(value)
    break;
  case "image" : 
    setimage(value)
    break;
  case "history" : 
    sethistory(value)
    break;
  case "equipments" : 
    setequipments(value)
    break;
  }
}
// {
//   "userId": 1,
//   "nome": "Ketellyn",
//   "raça": "elfo",
//   "idade": 100000,
//   "vida": 10000,
//   "magia": 1000,
//   "xp": 10000,
//   "imagem": "https://i0.wp.com/orbedosdragoes.com/wp-content/uploads/2022/01/PF2-elfo-zoom.png?resize=692%2C490&ssl=1",
//   "historia": "ela e uma bom Elfa",
//   "atributos": {
//     "força": 0,
//     "habilidade": 0,
//     "resistencia": 0,
//     "inteligencia": 0,
//     "armadura": 0
//   },
//   "habilidades": [],
//   "magias": [],
//   "vantagens": [],
//   "desvantagens": [],
//   "equipamento": []
// }
const create = async () => {
  try {
    const response = await axios.post("http://localhost:3001/person",
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
  } catch(err) {
    console.log(err.message);
  }
}
  return (
    <div>
      <Header />
      <FormsPerson 
  handleChange={handleChange}
  create={create}
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
  equipments={equipments} />
    </div>
  );
}

export default Create;
