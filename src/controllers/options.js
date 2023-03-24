module.exports = {
    async OPTIONSFunction(req, res) {
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send();
    }
}
