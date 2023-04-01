
import React from 'react';

function FormsPerson({
  handleChange,create,
  name, age, race, life,magicPoint,
  XP, strength, ability, resistency,armor,
  intelection, skills, magicSkills, benefits, disadvantage,
  image, history, equipments }) {

    
  return (
    <forms>
        <input 
      type="text"
      name='name'
      value={name}
      onChange={handleChange} 
      />
      <input 
      type="text"
      name='race'
      value={race}
      onChange={handleChange} 
      />
      <input 
      type="text"
      name='age'
      value={age}
      onChange={handleChange} 
      />
      <input 
      type="text"
      name='life'
      value={life}
      onChange={handleChange} 
      />
      <input 
      type="text"
      name='magicPoint'
      value={magicPoint}
      onChange={handleChange} 
      />
      <input 
      type="number"
      name='XP'
      value={XP}
      onChange={handleChange}
      />
      <input 
      type="text"
      name='strength'
      value={strength}
      onChange={handleChange} 
      />
      <input 
      type="number"
      name='ability'
      value={ability}
      onChange={handleChange}
      />
      <input 
      type="text"
      name='resistency'
      value={resistency}
      onChange={handleChange} 
      />
      <input 
      type="number"
      name='armor'
      value={armor}
      onChange={handleChange}
      />
      <input 
      type="text"
      name='intelection'
      value={intelection}
      onChange={handleChange} 
      />
      <input 
      type="number"
      name='skills'
      value={skills}
      onChange={handleChange}
      />
      <input 
      type="text"
      name='magicSkills'
      value={magicSkills}
      onChange={handleChange} 
      />
      <input 
      type="number"
      name='benefits'
      value={benefits}
      onChange={handleChange}
      />
      <input 
      type="text"
      name='disadvantage'
      value={disadvantage}
      onChange={handleChange} 
      />
      <input 
      type="number"
      name='image'
      value={image}
      onChange={handleChange}
      />
      <input 
      type="text"
      name='history'
      value={history}
      onChange={handleChange} 
      />
      <label>
      <button onClick={() => "clickado"}>
        add
      </button>
      <input 
      type="number"
      name='equipments'
      value={equipments}
      onChange={handleChange}
      />
      </label>
       <button
      type="button"
      onClick={ create }
      >
        login
      </button>
    </forms>
  );
}

export default FormsPerson;
