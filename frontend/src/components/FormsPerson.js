import React from 'react';
import styles from "./components.module.css"

function FormsPerson({
  handleChange, addList, removeList,
  name, age, race, life,magicPoint,
  XP, strength, ability, resistency,armor,
  intelection, skills, magicSkills, benefits, disadvantage,
   history, equipments, prevEquipment, prevSkills,
  prevBenefits, prevDisadvantage, prevMagicSkills }) {
  
    
  return (
    <forms className={styles.FormPerson}>

      <div className={styles.FormPersonContainer1}>
        <label className={styles.LabelForm}>
          Name
          <input 
            className={styles.Input2}
            type="text"
            name='name'
            value={name}
            onChange={handleChange} 
          />
        </label>
        <label className={styles.LabelForm}>
          Race
          <input 
            className={styles.Input2}
            type="text"
            name='race'
            value={race}
            onChange={handleChange} 
          />
        </label>
      </div>
  <label className={styles.LabelForm}>
  Image
  <input 
  className={styles}
  type="file"
  name='image'
  onChange={handleChange}
  >
  </input>
  </label>
  <br/>
      <div className={styles.FormPersonContainer2}>
        <label className={styles.LabelForm}>
          Age
          <input 
            className={styles.InputNumber}
            type="number"
            name='age'
            value={age}
            onChange={handleChange} 
          />
        </label>
        <label className={styles.LabelForm}>
          LifePoints 
          <input 
            className={styles.InputNumber}
            type="number"
            name='life'
            value={life}
            onChange={handleChange} 
          />
        </label>
        <label className={styles.LabelForm}>
          XP 
          <input 
            className={styles.InputNumber}
            type="number"
            name='XP'
            value={XP}
            onChange={handleChange}
          />
        </label>
      </div>


      <div className={styles.FormPersonContainer2}>
        <label className={styles.LabelForm}>
          MagicPoints 
          <input 
            className={styles.InputNumber}
            type="number"
            name='magicPoint'
            value={magicPoint}
            onChange={handleChange} 
          />
        </label>

        <label className={styles.LabelForm}>
          Intelection
          <input 
            className={styles.InputNumber}
            type="number"
            name='intelection'
            value={intelection}
            onChange={handleChange} 
            />
        </label>
        <label className={styles.LabelForm}>
          Ability
          <input 
            className={styles.InputNumber}
            type="number"
            name='ability'
            value={ability}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className={styles.FormPersonContainer2}> 
      <label className={styles.LabelForm}>
          Strength
          <input 
            className={styles.InputNumber}
            type="number"
            name='strength'
            value={strength}
            onChange={handleChange} 
          />
        </label>
        <label className={styles.LabelForm}>
          Resistency
          <input 
            className={styles.InputNumber}
            type="number"
            name='resistency'
            value={resistency}
            onChange={handleChange} 
          />
        </label>
        <label className={styles.LabelForm}>
          Armor
          <input 
            className={styles.InputNumber}
            type="number"
            name='armor'
            value={armor}
            onChange={handleChange}
          />
        </label>
        </div>

        <div className={styles.FormPersonContainer3}>

        <label className={styles.LabelForm2}>
        <div className={styles.FormPersonContainer4}>
        <button 
      className={styles.Button1}
      name='skills'
      onClick={removeList}
      >
        -
      </button>
      <button 
      className={styles.Button1}
      name='skills'
      onClick={addList}
      >
        +
      </button>
      <input 
      className={styles.Input3}
      placeholder='skills'
      type="text"
      name='prevSkills'
      value={prevSkills}
      onChange={handleChange}
      />
      </div>
      <textarea 
      className={styles.Input4}
      type="text"
      name='skills'
      value={skills.join(', ')}
      />
      </label>
      <label className={styles.LabelForm2}>
        <div className={styles.FormPersonContainer4}>
        <button 
      className={styles.Button1}
      name='magicSkills'
      onClick={removeList}
      >
        -
      </button>
      <button 
      className={styles.Button1}
      name='magicSkills'
      onClick={addList}
      >
        +
      </button>
      <input 
      className={styles.Input3}
      placeholder='magicSkills'
      type="text"
      name='prevMagicSkills'
      value={prevMagicSkills}
      onChange={handleChange} 
      />
      </div>
      <textarea
      className={styles.Input4}
      type="text"
      name='magicSkills'
      value={magicSkills.join(', ')}
      />
      </label>
      <label className={styles.LabelForm2}>
      <div className={styles.FormPersonContainer4}>
      <button 
      className={styles.Button1}
      name='benefits'
      onClick={removeList}
      >
        -
      </button>
      <button 
      className={styles.Button1}
      name='benefits'
      onClick={addList}
      >
        +
      </button>
      <input 
      className={styles.Input3}
      placeholder='benefits'
      type="text"
      name='prevBenefits'
      value={prevBenefits}
      onChange={handleChange}
      />
      </div>
      <textarea
      className={styles.Input4}
      type="text"
      name='benefits'
      value={benefits.join(', ')}
      />
      </label>
      <label className={styles.LabelForm2}>
        <div className={styles.FormPersonContainer4}>
        <button 
      className={styles.Button1}
      name='disadvantage'
      onClick={removeList}
      >
        -
      </button>
      <button 
      className={styles.Button1}
      name='disadvantage'
      onClick={addList}
      >
        +
      </button>
      <input 
      className={styles.Input3}
      type="text"
      name='prevDisadvantage'
      value={prevDisadvantage}
      onChange={handleChange} 
      placeholder='Disadvantage'
      />
      </div>
      <textarea 
      className={styles.Input4}
      type="text"
      name='disadvantage'
      value={disadvantage.join(', ')}
      />
      </label>
      <label className={styles.LabelForm2}>
        <div className={styles.FormPersonContainer4}>
        <button 
      name='equipment'
      className={styles.Button1}
      onClick={removeList}
      >
        -
      </button>
      <button 
      name='equipment'
      className={styles.Button1}
      onClick={addList}
      >
        +
      </button>
      <input 
      className={styles.Input3}
      placeholder='equipment'
      type="text"
      name='prevEquipment'
      value={prevEquipment}
      onChange={handleChange}
      />
      </div>
      <textarea 
      className={styles.Input4}
      type="test"
      name="equipments"
      value={equipments.join(', ')}
      />
      </label>
      <label className={styles.LabelForm2}>
      History
      <textarea 
      className={styles.Input4}
      type="text"
      name='history'
      value={history}
      onChange={handleChange}
      />
      </label>
      </div>
    </forms>
  );
}

export default FormsPerson;
