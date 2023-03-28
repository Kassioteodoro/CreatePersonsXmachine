const { expect } = require('chai');
const sinon = require('sinon');
const { 
  responseFrontCreate, returnFunctionCreate,
  responseFrontGet, responseDBGet, returnFunctionGet } = require('./mockUser');

const UserService = require('../../../src/services/userService');
const { User } = require('../../../src/database/MySQLDB/models');

describe('testando as regras de negocio do objeto User', function () {
  describe('e possivel cadastras um novo usuario', function () {
    it('com sucesso', async function () {
      // cenario
      sinon.stub(User, 'create').resolves();
      
      // execução
      const responseService = await UserService.create(responseFrontCreate); 

      // test
      expect(responseService).to.deep.equal(returnFunctionCreate);
    });
  });
  describe('e possivel buscar um usuario', function () {
    it('com sucesso', function () {
      // cenario
      sinon.stub(User, 'findOne').resolves(responseDBGet);
      
      // execução
      const responseService = UserService.get(responseFrontGet);
      
      // test
      expect(responseService).to.deep.equal({ type: null, message: returnFunctionGet });
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});