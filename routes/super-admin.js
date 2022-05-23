const express = require("express");
const router = express.Router();
const {commonHandler,userAxios} = require("../config/axios");
const SuperAdmin = require("../middlewares/super-admin");
const userHandler = (req,res) => {
    return commonHandler(userAxios,req,res)
}

router.post('/super-admin/admin',SuperAdmin,userHandler);
router.put('/super-admin/admin/:id',SuperAdmin,userHandler);
router.delete('/super-admin/admin/:id',SuperAdmin,userHandler);
router.get('/super-admin/admin',SuperAdmin,userHandler);

module.exports = router;