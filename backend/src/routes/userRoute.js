const { Router } = require('express');

const UserController = require('../controllers/userController');

const routes = Router();

routes.post('/register', UserController.register);
routes.post('/login', UserController.login);
routes.get('/:id', UserController.getById);

module.exports = routes;