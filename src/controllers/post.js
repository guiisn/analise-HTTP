const api = require('../api/api.json')

module.exports = {
    async POSTFunction(req, res) {
        const { id, name, age } = req.body

        const { users } = api

        const userExists = users.filter((user) => +user.id === +id)

        if (userExists.length) return res.status(400).json('User already exists.')

        if (typeof age !== 'number') return res.status(400).json('Age must be of type numeric')

        users.push({ name, age, id })

        res.status(201).json({ users })
    }
}
