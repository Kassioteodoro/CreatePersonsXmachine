import React from 'react';
import styles from "./components.module.css"

function FormsPerson({
  handleChange, addList,
  name, age, race, life,magicPoint,
  XP, strength, ability, resistency,armor,
  intelection, skills, magicSkills, benefits, disadvantage,
   history, equipments, prevEquipment, prevSkills,
  prevBenefits, prevDisadvantage, prevMagicSkills }) {
  
  return (
    <forms className={styles.FormsPerson}>

      <div className={styles.container2}>
        <label>
          Name:
          <input 
            className={styles.inputName}
            type="text"
            name='name'
            value={name}
            onChange={handleChange} 
          />
        </label>
        <label>
          Race:
          <input 
            className={styles.inputRace}
            type="text"
            name='race'
            value={race}
            onChange={handleChange} 
          />
        </label>
      </div>

      <div className={styles.container2}>
        <label>
          Age:
          <input 
            className={styles.inputValue1}
            type="number"
            name='age'
            value={age}
            onChange={handleChange} 
          />
        </label>
        <label>
          LifePoints: 
          <input 
            className={styles.inputValue1}
            type="number"
            name='life'
            value={life}
            onChange={handleChange} 
          />
        </label>
        <label>
          XP: 
          <input 
            className={styles.inputValue1}
            type="number"
            name='XP'
            value={XP}
            onChange={handleChange}
          />
        </label>
      </div>
      <div 
      className={styles.container1}>
      <div className={styles.containerAbilit}>
        <label>
          MagicPoints: 
          <input 
            className={styles.inputValue1}
            type="number"
            name='magicPoint'
            value={magicPoint}
            onChange={handleChange} 
          />
        </label>
        <label>
          Strength:
          <input 
            className={styles.inputValue1}
            type="number"
            name='strength'
            value={strength}
            onChange={handleChange} 
          />
        </label>
        <label>
          Ability:
          <input 
            className={styles.inputValue1}
            type="number"
            name='ability'
            value={ability}
            onChange={handleChange}
          />
        </label>
        <label>
          Resistency:
          <input 
            className={styles.inputValue1}
            type="number"
            name='resistency'
            value={resistency}
            onChange={handleChange} 
          />
        </label>
        <label>
          Armor:
          <input 
            className={styles.inputValue1}
            type="number"
            name='armor'
            value={armor}
            onChange={handleChange}
          />
        </label>
        <label>
          Intelection:
          <input 
            className={styles.inputValue1}
            type="number"
            name='intelection'
            value={intelection}
            onChange={handleChange} 
            />
        </label>
      </div>
      <label className={styles.labelHistory}>
      Image:
      <input 
      className={styles.inputValueImage}
      type="file"
      name='image'
      onChange={handleChange}
      />
      </label>
      </div>

      <div className={styles.container1}>
      <div className={styles.containerAbilit}>
      <label className={styles.label}>
        <div>
      <button 
      className={styles.button1}
      name='skills'
      onClick={addList}
      >
        +
      </button>
      <input 
      className={styles.inputValue2}
      placeholder='skills'
      type="text"
      name='prevSkills'
      value={prevSkills}
      onChange={handleChange}
      />
      </div>
      <textarea 
      className={styles.inputValue3}
      type="text"
      name='skills'
      value={skills.join(', ')}
      />
      </label>
      <label className={styles.label}>
        <div>
      <button 
      className={styles.button1}
      name='magicSkills'
      onClick={addList}
      >
        +
      </button>
      <input 
      className={styles.inputValue2}
      placeholder='magicSkills'
      type="text"
      name='prevMagicSkills'
      value={prevMagicSkills}
      onChange={handleChange} 
      />
      </div>
      <textarea
      className={styles.inputValue3}
      type="text"
      name='magicSkills'
      value={magicSkills.join(', ')}
      />
      </label>
      <label className={styles.label}>
      <div>
      <button 
      className={styles.button1}
      name='benefits'
      onClick={addList}
      >
        +
      </button>
      <input 
      className={styles.inputValue2}
      placeholder='benefits'
      type="text"
      name='prevBenefits'
      value={prevBenefits}
      onChange={handleChange}
      />
      </div>
      <textarea
      className={styles.inputValue3}
      type="text"
      name='benefits'
      value={benefits.join(', ')}
      />
      </label>
      <label className={styles.label}>
        <div>
      <button 
      className={styles.button1}
      name='disadvantage'
      onClick={addList}
      >
        +
      </button>
      <input 
      className={styles.inputValue2}
      type="text"
      name='prevDisadvantage'
      value={prevDisadvantage}
      onChange={handleChange} 
      placeholder='Disadvantage'
      />
      </div>
      <textarea 
      className={styles.inputValue3}
      type="text"
      name='disadvantage'
      value={disadvantage.join(', ')}
      />
      </label>
      </div>
      

      <div className={styles.containerAbilit}>
      <label className={styles.label}>
      History:
      <textarea 
      className={styles.inputValueHistory}
      type="text"
      name='history'
      value={history}
      onChange={handleChange}
      wrap='hard'
      />
      </label>

      <label className={styles.label}>
        <div>
      <button 
      name='equipment'
      className={styles.button1}
      onClick={addList}
      >
        +
      </button>
      <input 
      className={styles.inputValue2}
      placeholder='equipment'
      type="text"
      name='prevEquipment'
      value={prevEquipment}
      onChange={handleChange}
      />
      </div>
      <textarea 
      className={styles.inputValueHistory}
      type="test"
      name="equipments"
      value={equipments.join(', ')}
      width={300}
      />
      </label>
      </div>
      </div>
    </forms>
  );
}

export default FormsPerson;
