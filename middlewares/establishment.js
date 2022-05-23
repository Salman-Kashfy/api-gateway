const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if(!req.param('establishmentId')){
        res.status(403).json({
            status: false,
            message: 'Missing param establishmentId.'
        });
    }
    next()
}