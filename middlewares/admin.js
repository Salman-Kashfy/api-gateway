// const { MongoClient, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const constants = require('../config/constants');
// Connection URL
//const client = new MongoClient(process.env.MONGO_USER_URI);
module.exports = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // await client.connect();
        // const db = client.db(process.env.USER_DB);
        // const collection = db.collection('users');

        let user = await req.redis.get(decoded.uuid);
        user = JSON.parse(user)

        for (let i=0; i<user.userRoles.length;i++){
            if(user.userRoles[i].name === constants.ROLE.ADMIN){
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