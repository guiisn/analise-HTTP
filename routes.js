const GETController = require("./src/controllers/get");
const OPTIONSController = require("./src/controllers/options");
const HEADController = require("./src/controllers/head");

const { Router } = require("express");
const AuthMiddleware = require("./src/middlewares/auth");
const POSTController = require("./src/controllers/post");
const { DELETEFunction } = require("./src/controllers/delete");
const { UPDATEFunction } = require("./src/controllers/update");
const { PATCHFunction } = require("./src/controllers/patch");

const routes = Router()

routes.use(AuthMiddleware)

routes.get('/get', GETController.GETFunction)
routes.options('/options', OPTIONSController.OPTIONSFunction)
routes.head('/head', HEADController.HEADFunction)
routes.post('/post', POSTController.POSTFunction)
routes.delete('/delete/:userId', DELETEFunction)
routes.put('/put/:userId', UPDATEFunction)
routes.patch('/patch/:userId', PATCHFunction)

module.exports = { routes }