const UserService = require('../services/userService');

const register = async (req, res) => {
  const { body } = req;
  try {
    const response = await UserService.register(body);
    return res.status(201).json(response.message);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  const { body } = req;
  console.log(body);
  try {
    const response = await UserService.login(body);
    res.header('Access-Control-Allow-Origin', '*');
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'Origin, X-Requested-With, Content-Type, Accept',
  // );
    return res.status(200).json(response.message);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  const { params: { id } } = req;
  try {
    const response = await UserService.getById(id);
    return res.status(200).json(response.message);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  register,
  login,
  getById,
};