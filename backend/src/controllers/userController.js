const UserService = require('../services/userService');

const getAll = async (req, res) => {
  try {
    const response = await UserService.getAll();
    return res.status(200).json(response.message);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
};