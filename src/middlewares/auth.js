function AuthMiddleware(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json('Token not provided!')

    const token = authorization.replace('Bearer', '').trim();

    if (!token) return res.status(401).json('Badly formatted token')

    return next()
}

module.exports = AuthMiddleware