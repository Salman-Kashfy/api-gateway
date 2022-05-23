const jwt = require('jsonwebtoken');
module.exports = HasRoles = (param) => {
    return async (req, res, next) => {
        try{
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            let user = await req.redis.get(decoded.uuid);
            user = JSON.parse(user)

            for (let i=0; i<user.userRoles.length;i++){
                if(param.includes(user.userRoles[i].name)){
                    next();
                    return
                }
            }
            res.status(403).json({
                status: false,
                message: 'Permission denied.'
            });
        }catch(e){
            console.log(e.message)
            res.status(401).json({
                status: false,
                message: 'Unauthorized request'
            });
        }
    }
}