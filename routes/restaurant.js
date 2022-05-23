const express = require("express");
const router = express.Router();
const {commonHandler,restaurantAxios} = require("../config/axios");
const SuperAdmin = require("../middlewares/super-admin");
const hasRoles = require("../middlewares/has-roles");
const constants = require("../config/constants");
const handler = (req,res) => {
    return commonHandler(restaurantAxios,req,res)
}

router.post('/restaurant',SuperAdmin,handler);
router.put('/restaurant/:id',hasRoles([constants.ROLE.SUPER_ADMIN,constants.ROLE.ADMIN]),handler);
router.get('/restaurant/all',SuperAdmin,handler);

module.exports = router;