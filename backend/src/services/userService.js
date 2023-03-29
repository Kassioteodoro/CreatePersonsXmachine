const { User } = require('../database/MySQLDB/models');

const register = async (user) => {
  try {
    await User.create(user);
    return { type: null, message: 'created sucess' };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

const getByEmail = async (email) => {
  try {
    const response = await User.findOne({ where: { email } });
    return { type: null, message: response };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

const getById = async (id) => {
  try {
    const response = await User.findByPk(id);
    return { type: null, message: response };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

const login = async (user) => {
  try {
    const responseValid = await getByEmail(user.email);
    return { type: null, message: responseValid.message };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

module.exports = {
  register,
  getByEmail,
  getById,
  login,
};