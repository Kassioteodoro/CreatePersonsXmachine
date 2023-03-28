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

const getAll = async () => {
  try {
    const response = await Person.find();
    return { type: null, message: response };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

const getOne = async (person) => {
  try {
    const response = await Person.findById(person);
    return { type: null, message: response };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

const update = async (person, id) => {
  try {
    await Person.updateOne(id, person);
    return { type: null, message: 'update sucess' };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

const deleted = async (id) => {
  try {
    await Person.deleteOne(id);
    return { type: null, message: 'remove sucess' };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  deleted,
};