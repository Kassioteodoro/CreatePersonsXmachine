const { Router } = require('express');

const PersonController = require('../controllers/personController');

const routes = Router();

routes.post('/', PersonController.create);
routes.get('/getAll/:id', PersonController.getAll);
routes.get('/get/:id', PersonController.getOne);
routes.put('/update/:id', PersonController.update);
routes.delete('/delete/:id', PersonController.deleted);

module.exports = routes;