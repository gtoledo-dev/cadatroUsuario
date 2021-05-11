const express = require('express');

const routes = express.Router();

const Usuario = require('../controllers/usuarios.controllers')

//Rotas de usuarios
routes.get('/', Usuario.index);
routes.post('/api/usuarios',Usuario.create);
routes.get('/api/usuarios.details', Usuario.details);
routes.delete('/api/usuarios/:_id',Usuario.delete);
routes.put('api/usuarios',Usuario.update);

module.exports = routes;
