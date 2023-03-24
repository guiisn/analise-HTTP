const api = require('../api/api.json')

module.exports = {
    async DELETEFunction(req, res) {
        const { userId } = req.params

        const { users } = api

        const userExists = users.filter((user) => +user.id === +userId)

        if (!userExists.length) return res.status(400).json('User not exists.')

        const newUsers = users.filter((user) => +user.id !== +userId)

        return res.status(200).json(newUsers)
    }
}
