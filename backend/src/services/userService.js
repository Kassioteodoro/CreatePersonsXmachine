const { User } = require('../database/MySQLDB/models');

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

const validateLogin = (message, user) => {
  if (message === null) {
    return { type: 404, message: 'not found' };
  }
  if (message.dataValues.password !== Number(user.password)) {
    return { type: 400, message: 'password invalid' };
  }
};

const register = async (user) => {
  try {
    const { message } = await getByEmail(user.email);
    if (message !== null) {
    return { type: 400, message: 'email exist' };
    }
    await User.create(user);
    return { type: null, message: 'created sucess' };
  } catch (err) {
    console.log(err);
    return { type: 500, message: err.message };
  }
};

const login = async (user) => {
  try {
    const { message } = await getByEmail(user.email);
    validateLogin(message, user);
    return { type: null, message: message.dataValues };
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