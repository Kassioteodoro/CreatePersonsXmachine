const responseFrontCreate = {
  name: 'kassio',
  email: 'kassio@gmail.com',
  password: 123456,
};

const returnFunctionCreate = {
  type: null, message: 'created sucess',
};

const responseFrontGet = {
  name: 'kassio',
  email: 'kassio@gmail.com',
  password: 123456,
};

const responseDBGet = {
  id: 1,
  name: 'kassio',
  email: 'kassio@gmail.com',
  password: 123456,
};

const returnFunctionGet = {
  type: null, message: responseDBGet,
};

module.exports = {
  responseFrontCreate,
  returnFunctionCreate,
  responseFrontGet,
  responseDBGet,
  returnFunctionGet,
};