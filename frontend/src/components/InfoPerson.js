import React from 'react';

function InfoPerson({
  name, age, race, life,magicPoint,
  XP, strength, ability, resistency,armor,
  intelection, skills, magicSkills, benefits, disadvantage,
  image, history, equipments }) {

    
  return (
    <div>
        <h1>nome: {name}</h1>
        <br/>
        <img
                  height={ 300 }
                  width={ 200 }
                  src={ image }
                  alt={ name }
                />
        <h1>raça: {race}</h1>
        <h1>idade: {age}</h1>
        <h1>vida: {life}</h1>
        <h1>magia: {magicPoint}</h1>
        <h1>XP: {XP}</h1>
        <h1>força: {strength}</h1>
        <h1>habilidade: {ability}</h1>
        <h1>resistencia: {resistency}</h1>
        <h1>armadura: {armor}</h1>
        <h1>inteligencia: {intelection}</h1>
        <h1>habilidades: {skills}</h1>
        <h1>magias: {magicSkills}</h1>
        <h1>vantagens: {benefits}</h1>
        <h1>desvantagens: {disadvantage}</h1>
        <h1>equipamento: {equipments}</h1>
        <h1>historia: {history}</h1>
    </div>
  );
}

export default InfoPerson;