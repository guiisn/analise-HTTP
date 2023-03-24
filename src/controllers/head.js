module.exports = {
    async HEADFunction(req, res) {
        const responseHeaders = { 'Content-Type': 'application/json' };
        res.set(responseHeaders);
        res.send();
    }
}
