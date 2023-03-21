const { Router } = require('express');

const PersonController = require('../controllers/personController');

const routes = Router();

routes.post('', PersonController.create);

module.exports = routes;