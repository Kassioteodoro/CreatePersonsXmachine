const PersonService = require('../services/personService');

const create = async (req, res) => {
  const { body } = req;
  try {
    const response = await PersonService.create(body);
    return res.status(201).json(response.message);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  create,
};