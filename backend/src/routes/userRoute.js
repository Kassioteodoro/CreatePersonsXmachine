const { Router } = require('express');

const UserController = require('../controllers/userController');

const routes = Router();

routes.get('/', UserController.getAll);

module.exports = routes;