const api = require('../api/api.json')

module.exports = {
    async GETFunction(req, res) {
        const { users } = api
        res.status(200).json({ users })
    }
}
