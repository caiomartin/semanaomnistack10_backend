const { Router } = require('express')
const DevController = require('./controllers/DevControllers')
const SearchController = require('./controllers/SearchController')

const routes = Router()


// METODOS HTTP: GET, POST, PUT, DELETE

// TIPOS DE PARAMETROS
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Routes Params: request.params (Indentificar um recurso na alteração  ou remoção)
// Body: request.boddy (Dados para criação  ou alteração de um registro)


routes.get('/devs', DevController.index)

routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes