import styles from "./components.module.css"
import React from 'react';

function InfoPerson({
  name, age, race, life,magicPoint,
  XP, strength, ability, resistency,armor,
  intelection, skills, magicSkills, benefits, disadvantage,
  image, history, equipments }) {

    
  return (
    <div className={styles.InfoBody}>
      <div className={styles.InfoPersonContainer1}>
        <label className={styles.LabelView}>
        <h2>
        Name:
        </h2>
        <h3>{name}</h3>
        </label>
        <label className={styles.LabelView}>
        <h2>
        Race:
        </h2>
        <h3>{race}</h3>
        </label>

      </div>
        <img      className={styles.ImageView}
                  height={ 300 }
                  width={ 200 }
                  src={ image }
                  alt={ name }
                  />
        <div className={styles.InfoPersonContainer2}>
          <label className={styles.LabelView}>
            <h2>
          Age: 
            </h2>
      <h3>{age}</h3>
          </label>
          <label className={styles.LabelView}>
            <h2>
          XP: 
            </h2>
        <h3>{XP}</h3>
          </label>
          <label className={styles.LabelView}>
          <h2>
          Life: 
            </h2>
      <h3>{life}</h3>
          </label>
          <label className={styles.LabelView}>
            <h2>
          Magic: 
            </h2>
      <h3>{magicPoint}</h3>
          </label>
          <label className={styles.LabelView}>
            <h2>
          Intelection:   
            </h2>
      <h3>{intelection}</h3>
          </label>
          <label className={styles.LabelView}>
            <h2>
          Ability: 
            </h2>
        <h3>{ability}</h3>
          </label>
          <label className={styles.LabelView}>
            <h2>
          Strength:   
            </h2>
      <h3>{strength}</h3>
          </label>
          <label className={styles.LabelView}>
            <h2>
          Resistency: 
            </h2>
      <h3>{resistency}</h3>
          </label>
          <label className={styles.LabelView}>
            <h2>
          Armor: 
            </h2>
        <h3>{armor}</h3>
          </label>
        </div>
      <div className={styles.InfoPersonContainer2}>
        <label className={styles.LabelView}>
          <h2>
        Skills: 
          </h2>
        <h3>{skills.join(', ')}</h3>
        </label>
        <label className={styles.LabelView}>
          <h2>
        MagicSkills: 
          </h2>
        <h3>{magicSkills.join(', ')}</h3>
        </label>
        <label className={styles.LabelView}>
          <h2>
        Benefits: 
          </h2>
        <h3>{benefits.join(', ')}</h3>
        </label>
        <label className={styles.LabelView}>
          <h2>
        Disadvantage: 
          </h2>
        <h3>{disadvantage.join(', ')}</h3>
        </label>
        <label className={styles.LabelView}>
          <h2>
        Equipment: 
          </h2>
        <h3>{equipments.join(', ')}</h3>
        </label>
        <label className={styles.LabelView}>
          <h2>
        History: 
          </h2>
        <h3>{history}</h3>
        </label>
      </div>
    </div>
  );
}

export default InfoPerson;