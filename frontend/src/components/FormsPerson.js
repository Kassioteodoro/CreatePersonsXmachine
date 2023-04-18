import React from 'react';

function FormsPerson({
  handleChange, addList,
  name, age, race, life,magicPoint,
  XP, strength, ability, resistency,armor,
  intelection, skills, magicSkills, benefits, disadvantage,
  image, history, equipments, prevEquipment, prevSkills,
  prevBenefits, prevDisadvantage, prevMagicSkills }) {
  
  return (
    <forms>
      <label>
      name:
        <input 
      type="text"
      name='name'
      value={name}
      onChange={handleChange} 
      />
      </label>
      <label>
      raça:
      <input 
      type="text"
      name='race'
      value={race}
      onChange={handleChange} 
      />
      </label>
      <label>
      idade:
      <input 
      type="number"
      name='age'
      value={age}
      onChange={handleChange} 
      />
      </label>
      <label>
      vida: 
      <input 
      type="number"
      name='life'
      value={life}
      onChange={handleChange} 
      />
      </label>
      <label>
      magicPoints: 
      <input 
      type="number"
      name='magicPoint'
      value={magicPoint}
      onChange={handleChange} 
      />
      </label>
      <label>
      XP: 
      <input 
      type="number"
      name='XP'
      value={XP}
      onChange={handleChange}
      />
      </label>
      <label>
      força:
      <input 
      type="number"
      name='strength'
      value={strength}
      onChange={handleChange} 
      />
      </label>
      <label>
      habilidade:
      <input 
      type="number"
      name='ability'
      value={ability}
      onChange={handleChange}
      />
      </label>
      
      <label>
      resistencia:
      <input 
      type="number"
      name='resistency'
      value={resistency}
      onChange={handleChange} 
      />
      </label>
      <label>
      armadura:
      <input 
      type="number"
      name='armor'
      value={armor}
      onChange={handleChange}
      />
      </label>
      <label>
      intelection:
      <input 
      type="number"
      name='intelection'
      value={intelection}
      onChange={handleChange} 
      />
      </label>
      <label>
      skills:
      <button 
      name='skills'
      onClick={addList}
      >
        add
      </button>
      <input 
      type="text"
      name='prevSkills'
      value={prevSkills}
      onChange={handleChange}
      />
      <input 
      type="text"
      name='skills'
      value={skills.join(', ')}
      />
      </label>
      <label>
      magicSkills
      <button 
      name='magicSkills'
      onClick={addList}
      >
        add
      </button>
      <input 
      type="text"
      name='prevMagicSkills'
      value={prevMagicSkills}
      onChange={handleChange} 
      />
      <input 
      type="text"
      name='magicSkills'
      value={magicSkills.join(', ')}
      />
      </label>
      <label>
      benefits:
      <button 
      name='benefits'
      onClick={addList}
      >
        add
      </button>
      <input 
      type="text"
      name='prevBenefits'
      value={prevBenefits}
      onChange={handleChange}
      />
      <input 
      type="text"
      name='benefits'
      value={benefits.join(', ')}
      />
      </label>
      <label>
        disadvantage:
      <button 
      name='disadvantage'
      onClick={addList}
      >
        add
      </button>
      <input 
      type="text"
      name='prevDisadvantage'
      value={prevDisadvantage}
      onChange={handleChange} 
      />
      <input 
      type="text"
      name='disadvantage'
      value={disadvantage.join(', ')}
      />
      </label>
      <label>
      Image:
      <input 
      type="text"
      name='image'
      value={image}
      onChange={handleChange}
      />
      </label>
      <label>
      history:
      <input 
      type="text"
      name='history'
      value={history}
      onChange={handleChange} 
      />
      </label>
      <label>
        Equipamentos
      <button 
      name='equipment'
      onClick={addList}
      >
        add
      </button>
      <input 
      type="text"
      name='prevEquipment'
      value={prevEquipment}
      onChange={handleChange}
      />
      <input 
      type="test"
      name="equipments"
      value={equipments.join(', ')}
      width={300}
      />
      </label>
    </forms>
  );
}

export default FormsPerson;
