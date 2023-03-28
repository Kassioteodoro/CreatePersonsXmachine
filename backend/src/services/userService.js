const { User } = require('../database/MySQLDB/models');

const getAll = async () => {
  try {
    const response = await User.findAll();
    return { type: null, message: response };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

module.exports = {
  getAll,
};