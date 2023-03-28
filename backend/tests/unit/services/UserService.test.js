const { expect } = require('chai');
const sinon = require('sinon');
const { 
  
  responseFrontOneUser,
  responseDBOneUser } = require('./mockUser');

const UserService = require('../../../src/services/userService');
const { User } = require('../../../src/database/MySQLDB/models');

describe('testando as regras de negocio do objeto User', function () {
  describe('e possivel cadastras um novo usuario', function () {
    it('com sucesso', async function () {
      // cenario
      sinon.stub(User, 'create').resolves();
      
      // execução
      const responseService = await UserService.register(responseFrontOneUser); 

      // test
      expect(responseService).to.deep.equal({ type: null, message: 'created sucess' });
    });
  });

  describe('e possivel efetuar um login', function () {
    it('com sucesso', async function () {
      // cenario
      sinon.stub(User, 'findOne').resolves(responseDBOneUser);
      
      // execução
      const responseService = await UserService.login(responseFrontOneUser);
      
      // test
      expect(responseService).to.deep.equal({ type: null, message: responseDBOneUser });
    });
  });

  describe('e possivel buscar um usuario', function () {
    it('por id com sucesso', async function () {
      // cenario
      sinon.stub(User, 'findOne').resolves(responseDBOneUser);
      
      // execução
      const responseService = await UserService.getById(1);
      
      // test
      expect(responseService).to.deep.equal({ type: null, message: responseDBOneUser });
    });
    it('por email com sucesso', async function () {
      // cenario
      sinon.stub(User, 'findOne').resolves(responseDBOneUser);
      
      // execução
      const responseService = await UserService.getByEmail('kassio@gmail.com');
      
      // test
      expect(responseService).to.deep.equal({ type: null, message: responseDBOneUser });
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});