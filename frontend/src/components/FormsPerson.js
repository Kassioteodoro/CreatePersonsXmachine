
import React, {useState} from 'react';

function FormsPerson({
  handleChange,create,
  name, age, race, life,magicPoint,
  XP, strength, ability, resistency,armor,
  intelection, skills, magicSkills, benefits, disadvantage,
  image, history, equipments }) {

    const [equipmentList, setEquipmentList] = useState('')

    const addListEquipament = (e) => {
      equipmentList === '' ? setEquipmentList(equipments) : setEquipmentList((Lolvalue) => `${Lolvalue}, ${equipments}`)
      console.log(e);
      console.log(equipments);
      console.log(equipmentList);
    }
  return (
    <forms>
      <label>
      name
        <input 
      type="text"
      name='name'
      value={name}
      onChange={handleChange} 
      />
      </label>
      <label>

      <input 
      type="text"
      name='race'
      value={race}
      onChange={handleChange} 
      />
      </label>
      <label>

      <input 
      type="text"
      name='age'
      value={age}
      onChange={handleChange} 
      />
      </label>
      <label>

      <input 
      type="text"
      name='life'
      value={life}
      onChange={handleChange} 
      />
      </label>
      <label>

      <input 
      type="text"
      name='magicPoint'
      value={magicPoint}
      onChange={handleChange} 
      />
      </label>
      <label>

      <input 
      type="number"
      name='XP'
      value={XP}
      onChange={handleChange}
      />
      </label>
      <label>

      <input 
      type="text"
      name='strength'
      value={strength}
      onChange={handleChange} 
      />
      </label>
      <label>

      <input 
      type="number"
      name='ability'
      value={ability}
      onChange={handleChange}
      />
      </label>
      
      <label>

      <input 
      type="text"
      name='resistency'
      value={resistency}
      onChange={handleChange} 
      />
      </label>
      <label>


      <input 
      type="number"
      name='armor'
      value={armor}
      onChange={handleChange}
      />
      </label>
      <label>
        
      <input 
      type="text"
      name='intelection'
      value={intelection}
      onChange={handleChange} 
      />
      </label>
      <label>

      <input 
      type="number"
      name='skills'
      value={skills}
      onChange={handleChange}
      />
      </label>
      <label>

      <input 
      type="text"
      name='magicSkills'
      value={magicSkills}
      onChange={handleChange} 
      />
      </label>
      <label>

      <input 
      type="number"
      name='benefits'
      value={benefits}
      onChange={handleChange}
      />
      </label>
      <label>

      <input 
      type="text"
      name='disadvantage'
      value={disadvantage}
      onChange={handleChange} 
      />
      </label>
      <label>

      <input 
      type="number"
      name='image'
      value={image}
      onChange={handleChange}
      />
      </label>
      <label>

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
      onClick={addListEquipament}
      >
        add
      </button>
      <input 
      type="text"
      name='equipments'
      value={equipments}
      onChange={handleChange}
      />
      <input 
      type="test"
      name="equipmentList"
      value={equipmentList}
      width={300}
      />
      </label>
      <br/>
       <button
      type="button"
      onClick={ create }
      >
        Create
      </button>
    </forms>
  );
}

export default FormsPerson;
