const api = require('../api/api.json')

module.exports = {
    async PATCHFunction(req, res) {
        const { userId } = req.params
        const { name, age } = req.body

        const { users } = api

        const user = users.filter((user) => +user.id === +userId)

        if (!user.length) return res.status(400).json('User not exists.')

        if (name) user[0].name = name
        if (age) user[0].age = age

        return res.status(200).json(user[0])
    }
}
