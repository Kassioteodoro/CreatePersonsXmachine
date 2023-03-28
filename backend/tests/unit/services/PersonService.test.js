const { expect } = require('chai');
const sinon = require('sinon');
const { 
  responseFrontCreate, responseFrontUpdate,
  returnDBCreate, returnDBFindAll,
  returnDBUpdate } = require('./mockPerson');

const PersonService = require('../../../src/services/personService');
const ModelPerson = require('../../../src/database/MongoDB/modelPerson');

const sucessTitle = 'com sucesso';

describe('testando as regras de negocio do objeto Person', function () {
  describe('e possivel cadastras um novo personagem', function () {
    it(sucessTitle, async function () {
      // cenario
      sinon.stub(ModelPerson, 'create').resolves(returnDBCreate);
      
      // execução
      const responseService = await PersonService.create(responseFrontCreate); 

      // test
      expect(responseService).to.deep.equal({ type: null, message: 'created sucess' });
    });
  });
  describe('e possivel buscar todos os personagens de um usuario', function () {
    it(sucessTitle, function () {
      // cenario
      sinon.stub(ModelPerson, 'find').resolves(returnDBFindAll);
      
      // execução
      const responseService = PersonService.findAll(1);
      
      // test
      expect(responseService).to.deep.equal({ type: null, message: returnDBFindAll });
    });
  });
  describe('e possivel buscar um personagem especifico', function () {
    it(sucessTitle, function () {
      // cenario
      sinon.stub(ModelPerson, 'findById').resolves(returnDBCreate);
      
      // execução
      const responseService = PersonService.findOne('6348513f34c397abcad040b2');
      
      // test
      expect(responseService).to.deep.equal({ type: null, message: returnDBCreate });
    });
  });
  describe('e possivel atualizar um personagem especifico', function () {
    it(sucessTitle, function () {
      // cenario
      sinon.stub(ModelPerson, 'updateOne').resolves(returnDBUpdate);
      
      // execução
      const responseService = PersonService.update(responseFrontUpdate, '6348513f34c397abcad040b2');
      
      // test
      expect(responseService).to.deep.equal({ type: null, message: responseFrontUpdate });
    });
  });
  describe('e possivel deletar um personagem especifico', function () {
    it(sucessTitle, function () {
           // cenario
           sinon.stub(ModelPerson, 'deleteOne').resolves();
      
           // execução
           const responseService = PersonService.delete('6348513f34c397abcad040b2');
           
           // test
           expect(responseService).to.deep.equal({ type: null, message: 'remove sucess' });
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});