const Person = require('../database/MongoDB/modelPerson');

const create = async (person) => {
  try {
    await Person.create(person);
    return { type: null, message: 'created sucess' };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

module.exports = {
  create,
};