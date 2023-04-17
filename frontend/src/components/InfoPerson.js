import React from 'react';

function InfoPerson({
  name, age, race, life,magicPoint,
  XP, strength, ability, resistency,armor,
  intelection, skills, magicSkills, benefits, disadvantage,
  image, history, equipments }) {

    
  return (
    <div>
        <h1>{name}</h1>
        <br/>
        <h1>{image}</h1>
        <h1>{age}</h1>
        <h1>{race}</h1>
        <h1>{life}</h1>
        <h1>{magicPoint}</h1>
        <h1>{XP}</h1>
        <h1>{strength}</h1>
        <h1>{ability}</h1>
        <h1>{resistency}</h1>
        <h1>{armor}</h1>
        <h1>{intelection}</h1>
        <h1>{skills}</h1>
        <h1>{name}</h1>
        <h1>{magicSkills}</h1>
        <h1>{benefits}</h1>
        <h1>{disadvantage}</h1>
        <h1>{equipments}</h1>
        <h1>{history}</h1>
        <img
                  height={ 100 }
                  src={ image }
                  alt={ name }
                />
        <h1>{history}</h1>
        <h1>{equipments}</h1>
    </div>
  );
}

export default InfoPerson;