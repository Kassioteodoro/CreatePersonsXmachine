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

const getAll = async (id) => {
  try {
    const response = await Person.find({ userId: id });
    return { type: null, message: response };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

const getOne = async (id) => {
  try {
    const response = await Person.findById(id);
    return { type: null, message: response };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

const update = async (person, _id) => {
  try {
    await Person.updateOne({ _id }, person);
    return { type: null, message: 'update sucess' };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

const deleted = async (_id) => {
  try {
    await Person.deleteOne({ _id });
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