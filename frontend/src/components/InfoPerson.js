import styles from "./components.module.css"
import React from 'react';

function InfoPerson({
  name, age, race, life,magicPoint,
  XP, strength, ability, resistency,armor,
  intelection, skills, magicSkills, benefits, disadvantage,
  image, history, equipments }) {

    
  return (
    <div className={styles.FormsPerson}>
      <div className={styles.container3}>
      <div>
      <div className={styles.container2}>
        <h1>nome: {name}</h1>
        <h1>Race: {race}</h1>
      </div>
      <div className={styles.container2}>
      <h1>age: {age}</h1>
      <h1>lifePoint: {life}</h1>
        <h1>XP: {XP}</h1>
      </div>
      <div className={styles.container2}>

      <h1>magicPoint: {magicPoint}</h1>
      <h1>Strength: {strength}</h1>
        <h1>Ability: {ability}</h1>
      <h1>Resistency: {resistency}</h1>
        <h1>Armor: {armor}</h1>
      <h1>Intelection: {intelection}</h1>
      </div>
      </div>
        <img
                  height={ 300 }
                  width={ 200 }
                  src={ image }
                  alt={ name }
                  />
        </div>
        <div className={styles.container3}>
        <div className={styles.container2}>
        <h1>Skills:<br/> {skills.join(', ')}</h1>
        <h1>magicSkills:<br/> {magicSkills.join(', ')}</h1>
        <h1>benefits:<br/> {benefits.join(', ')}</h1>
        </div>
        <div className={styles.container2}>
        <h1>disadvantage:<br/> {disadvantage.join(', ')}</h1>
        <h1>history:<br/> {history}</h1>
        <h1>equipment:<br/> {equipments.join(', ')}</h1>
        </div>
        </div>
    </div>
  );
}

export default InfoPerson;