const PersonService = require('../services/personService');

const create = async (req, res) => {
  const { body } = req;
  try {
    const response = await PersonService.create(body);
    return res.status(201).json(response.message);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAll = async (req, res) => {
  const { params: { id } } = req;
  try {
    const response = await PersonService.getAll(id);
    return res.status(200).json(response.message);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getOne = async (req, res) => {
  const { params: { id } } = req;
  try {
    const response = await PersonService.getOne(id);
    return res.status(200).json(response.message);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  const { body, params: { id } } = req;
  try {
    const response = await PersonService.update(body, id);
    return res.status(200).json(response.message);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleted = async (req, res) => {
  const { params: { id } } = req;
  try {
    const response = await PersonService.deleted(id);
    return res.status(200).json(response.message);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  deleted,
};